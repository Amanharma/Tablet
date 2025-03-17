import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap for styling

const BreastCancerForm = () => {
  const [formData, setFormData] = useState({
    mean_radius: "",
    mean_texture: "",
    mean_perimeter: "",
    mean_area: "",
    mean_smoothness: "",
    radius_error: "",
    texture_error: "",
    perimeter_error: "",
    worst_radius: "",
    worst_texture: "",
    worst_perimeter: "",
    mean_compactness: "",
    mean_concavity: "",
    mean_symmetry: "",
    mean_fractal_dimension: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Convert input values to float, ensuring only valid numbers are sent
    const requestData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        const numValue = parseFloat(value);
        return [key, isNaN(numValue) ? null : numValue]; // Prevents sending NaN
      })
    );

    // ✅ Validate: Ensure all fields contain valid numbers before sending
    if (Object.values(requestData).some((v) => v === null)) {
      alert("❌ All fields must contain valid numbers!");
      return;
    }

    console.log("📢 Sending Data:", requestData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/predict/breast-cancer/",
        requestData
      );
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("🚨 API Error:", error.response?.data || error.message);
      alert("❌ Failed to get prediction. Check inputs and server.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Breast Cancer Prediction</h2>
      <p className="text-center">
        Enter test values to predict if cancer is benign or malignant.
      </p>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="row">
          {Object.keys(formData).map((field, index) => (
            <div key={index} className="col-md-6 mb-3">
              <label className="form-label">{field.replace(/_/g, " ")}</label>
              <input
                type="number"
                className="form-control"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                step="0.01"
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Get Prediction
        </button>
      </form>

      {prediction && (
        <div className="alert mt-4 text-center alert-info">
          <h4>Prediction: {prediction}</h4>
        </div>
      )}
    </div>
  );
};

export default BreastCancerForm;
