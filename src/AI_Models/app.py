import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

calories_model = pickle.load(open("Calories.pkl", "rb"))
stress_model = pickle.load(open("stress.pkl", "rb"))
parkinson_model = pickle.load(open("parkinson.pkl", "rb"))


@app.route("/predictCalories", methods=["POST"])
def predictCalories():
    try:
        data = request.json
        age = data.get("calories_age")
        duration = data.get("calories_duration")
        temperature = data.get("calories_temperature")
        heart_rate = data.get("calories_heart_rate")

        input_features = np.array(
            [
                [
                    age,
                    duration,
                    temperature,
                    heart_rate,
                ]
            ]
        )
        prediction = calories_model.predict(input_features)

        return jsonify({"calories": round(prediction[0], 1)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/predictStress", methods=["POST"])
def predict_stress():
    try:
        data = request.json
        Humidity = data.get("Humidity")
        Temperature_C = data.get("Temperature_C")
        Step_count = data.get("Step_count")

        if any(value is None for value in [Humidity, Temperature_C, Step_count]):
            return jsonify({"error": "Missing or invalid input values"}), 400

        input_features = pd.DataFrame(
            [[Humidity, Temperature_C, Step_count]],
            columns=["Humidity", "Temperature_C", "Step_count"],
        )

        prediction = stress_model.predict(input_features)

        return jsonify({"stress": int(round(prediction[0], 1))})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500


@app.route("/predictParkinson", methods=["POST"])
def predict_parkinson():
    try:
        data = request.json
        Subjnum = data.get("Subjnum")
        Age = data.get("Age")
        Height_meters = data.get("Height_meters")
        Weight_kg = data.get("Weight_kg")
        Height_meters = data.get("Height_meters")
        HoehnYahr = data.get("HoehnYahr")
        UPDRSM = data.get("UPDRSM")
        TUAG = data.get("TUAG")
        Speed_01_msec = data.get("Speed_01_msec")
        Speed_10 = data.get("Speed_10")

        if any(
            value is None
            for value in [
                Subjnum,
                Age,
                Height_meters,
                Weight_kg,
                HoehnYahr,
                UPDRSM,
                TUAG,
                Speed_01_msec,
                Speed_10,
            ]
        ):
            return jsonify({"error": "Missing or invalid input values"}), 400

        input_features = pd.DataFrame(
            [
                [
                    Subjnum,
                    Age,
                    Height_meters,
                    Weight_kg,
                    HoehnYahr,
                    UPDRSM,
                    TUAG,
                    Speed_01_msec,
                    Speed_10,
                ]
            ],
            columns=[
                "Subjnum",
                "Age",
                "Height_meters",
                "Weight_kg",
                "HoehnYahr",
                'UPDRSM',
                'TUAG',
                'Speed_01_msec',
                'Speed_10',
            ],
        )

        prediction = parkinson_model.predict(input_features)

        return jsonify({"parkinson": int(round(prediction[0], 1))})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
