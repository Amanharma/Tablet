import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap for styling

const AutismForm = () => {
  const [formData, setFormData] = useState({
    A1_Score: "",
    A2_Score: "",
    A3_Score: "",
    A4_Score: "",
    A5_Score: "",
    A6_Score: "",
    A7_Score: "",
    A8_Score: "",
    A9_Score: "",
    A10_Score: "",
    Autism: "",
    Result: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Convert input values to numbers
    const requestData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        const numValue = parseInt(value, 10);
        return [key, isNaN(numValue) ? null : numValue]; // Prevents NaN
      })
    );

    // ✅ Validate: Ensure all fields contain valid numbers before sending
    if (Object.values(requestData).some((v) => v === null)) {
      alert("❌ All fields must contain valid numbers (0 or 1)!");
      return;
    }

    console.log("📢 Sending Data:", requestData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/predict/autism/",
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
      <h2 className="text-center">Autism Prediction</h2>
      <p className="text-center">
        Enter test values to predict if the person is autistic.
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
                min="0"
                max="20"
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

export default AutismForm;
