import React, { useState } from "react";
import "./InteractiveForm.css";

const InteractiveForm = () => {
  const [formData, setFormData] = useState({});
  const [output, setOutput] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock output
    const mockOutput =
      formData.model === "calories"
        ? `Estimated Calories Burned: ${Math.random() * 100 + 200} kcal`
        : `Predicted Stress Level: Moderate`;
    setOutput(mockOutput);
  };

  return (
    <section className="interactive-form">
      <h2>Test Our AI Models</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Choose Model:
          <select name="model" onChange={handleInputChange}>
            <option value="calories">Calories Estimation</option>
            <option value="stress">Stress Level Prediction</option>
          </select>
        </label>
        <label>
          Age:
          <input type="number" name="age" onChange={handleInputChange} />
        </label>
        <label>
          Weight (kg):
          <input type="number" name="weight" onChange={handleInputChange} />
        </label>
        <label>
          Duration (min):
          <input type="number" name="duration" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {output && <div className="output">{output}</div>}
    </section>
  );
};

export default InteractiveForm;
