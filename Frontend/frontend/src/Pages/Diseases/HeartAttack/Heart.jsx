import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PredictForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalch: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/new_predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.new_prediction);
    } catch (error) {
      console.error("Prediction failed:", error);
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto mt-10 shadow-lg">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium">{key}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <Button type="submit" className="w-full">
            Predict
          </Button>
        </form>
        {prediction !== null && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            Prediction: {prediction}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PredictForm;
