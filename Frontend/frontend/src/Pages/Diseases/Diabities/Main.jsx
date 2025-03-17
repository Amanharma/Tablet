import React, { useState } from "react";

const Main = () => {
  const [formData, setFormData] = useState({
    age: "",
    bmi: "",
    glucose: "",
    insulin: "",
    bloodPressure: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const parseInput = (value, isInteger = false) => {
    if (value.trim() === "") return isInteger ? 0 : null;
    return isInteger ? parseInt(value, 10) : parseFloat(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      age: parseInput(formData.age, true),
      bmi: parseInput(formData.bmi),
      glucose: parseInput(formData.glucose),
      insulin: parseInput(formData.insulin),
      blood_pressure: parseInput(formData.bloodPressure),
    };

    console.log("📢 Final requestData:", JSON.stringify(requestData, null, 2));

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/predict/diabetes/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      const data = await response.json();
      console.log("✅ API Response:", data);

      if (response.ok) {
        alert(`Prediction: ${JSON.stringify(data.prediction)}`);
      } else {
        alert("❌ Error: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("🚨 Error submitting form:", error);
      alert("Failed to connect to API");
    }
  };

  return (
    <div className="container mb-5">
      <main>
        <div className="py-5 text-center">
          <h2>Diabetes Predictor!</h2>
          <p className="lead">
            App for diabetes prediction, designed for students of IILM
            University.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Enter Your Details</h4>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {[
                  { label: "Age", name: "age", type: "number" },
                  { label: "BMI", name: "bmi", type: "number", step: "0.01" },
                  {
                    label: "Glucose",
                    name: "glucose",
                    type: "number",
                    step: "0.01",
                  },
                  {
                    label: "Insulin",
                    name: "insulin",
                    type: "number",
                    step: "0.01",
                  },
                  {
                    label: "Blood Pressure",
                    name: "bloodPressure",
                    type: "number",
                    step: "0.01",
                  },
                ].map(({ label, name, type, step }) => (
                  <div className="col-12" key={name}>
                    <label className="form-label">{label}</label>
                    <input
                      type={type}
                      className="form-control"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      step={step || ""}
                      required
                    />
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Predict Now!
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
