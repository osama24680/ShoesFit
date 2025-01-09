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
scaler_model = pickle.load(open("sleep_model.pkl", "rb"))
sleepStress = pickle.load(open("sleepStress.pkl", "rb"))


# stress__model = pickle.load(open("stress_model.pkl", "rb"))
# sleep__model = pickle.load(open("sleep_model.pkl", "rb"))  # Replace calories_model
# scaler__model = pickle.load(open("scaler_model.pkl", "rb"))

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
                "UPDRSM",
                "TUAG",
                "Speed_01_msec",
                "Speed_10",
            ],
        )

        prediction = parkinson_model.predict(input_features)

        return jsonify({"parkinson": int(round(prediction[0], 1))})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500

@app.route("/predictScaler", methods=["POST"])
def predict_scaler():
    try:
        data = request.json

        # Extract input data
        age = data.get("age")
        sleep_duration = data.get("sleep_duration")
        heart_rate = data.get("heart_rate")
        daily_steps = data.get("daily_steps")

        # Validate inputs
        if any(
            value is None for value in [age, sleep_duration, heart_rate, daily_steps]
        ):
            return jsonify({"error": "Missing or invalid input values"}), 400

        # Create input DataFrame
        input_features = pd.DataFrame(
            [[age, sleep_duration, heart_rate, daily_steps]],
            columns=["age", "sleep_duration", "heart_rate", "daily_steps"],
        )

        # Make prediction using the scaler model
        prediction = scaler_model.predict(input_features)

        # Ensure response is JSON serializable
        return jsonify({"scaler": prediction.tolist()})

    except Exception as e:
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500




# @app.route("/sleepStress", methods=["POST"])
# def predict_sleepStress():
#     try:
#         data = request.json

        
#         age = data.get("age")
#         heart_rate = data.get("heart_rate")
#         sleep_duration = data.get("sleep_duration")
#         systole = data.get("systole")
#         diastole = data.get("diastole")

#         # Validate inputs
#         if any(
#             value is None for value in [age, heart_rate, sleep_duration, systole, diastole]
#         ):
#             return jsonify({"error": "Missing or invalid input values"}), 400

#         # Create input DataFrame
#         input_features = pd.DataFrame(
#             [[age,heart_rate, sleep_duration, systole,diastole]],
#             columns=["age", "heart_rate", "sleep_duration","systole","diastole"],
#         )

#         # Make prediction using the scaler model
#         predictionSleepStress = sleepStress.predict(input_features)

#         # Ensure response is JSON serializable
#         return jsonify({"sleepStress": predictionSleepStress.tolist()})

#     except Exception as e:
#         return jsonify({"error": f"Internal server error: {str(e)}"}), 500




@app.route("/sleepStress", methods=["POST"])
def predict_sleepStress():
    try:
        data = request.json

        # Parse and validate inputs
        age = data.get("age")
        heart_rate = data.get("heart_rate")
        sleep_duration = data.get("sleep_duration")
        systole = data.get("systole")
        diastole = data.get("diastole")

        if any(value is None for value in [age, heart_rate, sleep_duration, systole, diastole]):
            return jsonify({"error": "Missing or invalid input values"}), 400

        try:
            # Ensure all inputs are numeric
            age = float(age)
            heart_rate = float(heart_rate)
            sleep_duration = float(sleep_duration)
            systole = float(systole)
            diastole = float(diastole)
        except ValueError:
            return jsonify({"error": "All inputs must be numeric"}), 400

        # Create input array and scale it
        input_data = np.array([[age, heart_rate, sleep_duration, systole, diastole]])
        input_data_scaled = sleepStress['scaler'].transform(input_data)

        # Predict sleep and stress
        predicted_stress = sleepStress['model_stress'].predict(input_data_scaled)
        predicted_sleep = sleepStress['model_sleep'].predict(input_data_scaled)

        # Round predictions
        predicted_stress = round(predicted_stress[0])
        predicted_sleep = round(predicted_sleep[0])

        # Return predictions
        return jsonify({"predicted_sleep": predicted_sleep, "predicted_stress": predicted_stress})

    except Exception as e:
        print(f"Error: {str(e)}")  # Log error for debugging
        return jsonify({"error": f"Internal server error: {str(e)}"}), 500




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
