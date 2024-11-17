import React from "react";
import "./ModelsSection.css";

const ModelsSection = () => {
  const models = [
    {
      title: "Calories Estimation Model",
      description:
        "Estimate calories burned based on age, weight, activity type, and duration.",
      image: "/images/calories-model.webp",
    },
    {
      title: "Stress Level Prediction Model",
      description:
        "Predict stress levels based on heart rate, activity level, and sleep hours.",
      image: "/images/stress-model.webp",
    },
  ];

  return (
    <section className="models-section">
      <h2>Our AI Models</h2>
      <div className="models-list">
        {models.map((model, index) => (
          <div key={index} className="model-card">
            <img src={model.image} alt={model.title} />
            <h3>{model.title}</h3>
            <p>{model.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelsSection;
