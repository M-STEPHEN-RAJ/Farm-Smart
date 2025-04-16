import React, { useState } from "react";
import "./CropRecommender.css";

const CropRecommender = ({ onResult }) => {
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5003/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        // Call the parent component's handler
        onResult({
          crop: data.crop,
          ...formData,
        });
      }
    } catch (err) {
      setError("Failed to connect to backend");
    }
  };

  return (
    <div className="crop-container">
      <h2>Crop Recommendation System</h2>

      <form onSubmit={handleSubmit}>
        <label>Temperature (°C):</label>
        <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} required />

        <label>Humidity (%):</label>
        <input type="number" name="humidity" value={formData.humidity} onChange={handleChange} required />

        <label>pH Level:</label>
        <input type="number" name="ph" value={formData.ph} step="0.1" onChange={handleChange} required />

        <label>Rainfall (mm):</label>
        <input type="number" name="rainfall" value={formData.rainfall} onChange={handleChange} required />

        <button className="crop-submit" type="submit">Get Recommendation</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default CropRecommender;
