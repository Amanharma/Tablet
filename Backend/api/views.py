from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
import joblib
import pickle
from django.http import HttpResponseRedirect

def react_redirect(request):
    return HttpResponseRedirect("http://localhost:3000/")


import os
from django.conf import settings


# ✅ Use the correct path to the model
MODEL_PATH = os.path.join(settings.BASE_DIR, "Diabetes.pkl")  # ✅ Correct filename

@api_view(["POST"])
def predict_diabetes(request):
    print("📢 Received Data:", request.data)  # Debugging

    try:
        # ✅ Check if the model file exists
        if not os.path.exists(MODEL_PATH):
            return Response({"error": "Diabetes model file not found."}, status=500)

        diabetes_model = joblib.load(MODEL_PATH)  # ✅ Load the model

        if diabetes_model is None:
            return Response({"error": "Diabetes model failed to load"}, status=500)

        # ✅ Extract input data
        age = int(request.data["age"])
        bmi = float(request.data["bmi"])
        glucose = float(request.data["glucose"])
        insulin = float(request.data["insulin"])
        blood_pressure = float(request.data["blood_pressure"])

        # ✅ Ensure inputs are in the correct format
        features = [[age, bmi, glucose, insulin, blood_pressure]]
        prediction_result = diabetes_model.predict(features)[0]
        prediction_label = "Diabetic" if prediction_result == 1 else "Non-Diabetic"

        return Response({"prediction": prediction_label})

    except Exception as e:
        return Response({"error": str(e)}, status=400)



AUTISM_MODEL_PATH = os.path.join(settings.BASE_DIR, "Autism.pkl")

@api_view(["POST"])
def predict_autism(request):
    print("📢 Received Data:", request.data)  # ✅ Debugging

    required_fields = [
        "A1_Score", "A2_Score", "A3_Score", "A4_Score", "A5_Score",
        "A6_Score", "A7_Score", "A8_Score", "A9_Score", "A10_Score",
        "Autism", "Result"
    ]

    # ✅ Check for missing fields
    for field in required_fields:
        if field not in request.data:
            return Response({"error": f"Missing field: {field}"}, status=400)

    try:
        # ✅ Check if the model file exists
        if not os.path.exists(AUTISM_MODEL_PATH):
            print("🚨 Model file not found!")  # ✅ Debugging
            return Response({"error": "Autism model file not found."}, status=500)

        print("✅ Loading Autism Model...")  # ✅ Debugging
        autism_model = joblib.load(AUTISM_MODEL_PATH)  # ✅ Load the model

        if autism_model is None:
            return Response({"error": "Autism model failed to load"}, status=500)

        # ✅ Convert input data to float/int where needed
        input_features = []
        for field in required_fields:
            try:
                input_features.append(float(request.data[field]))
            except ValueError:
                print(f"🚨 Invalid value for {field}: {request.data[field]}")  # ✅ Debugging
                return Response({"error": f"Invalid value for {field}. Must be a number."}, status=400)

        # ✅ Ensure inputs are in the correct format
        features = np.array([input_features], dtype=np.float64)
        print("✅ Features Array:", features)  # ✅ Debugging

        prediction_result = autism_model.predict(features)[0]
        prediction_label = "Autistic" if prediction_result == 1 else "Non-Autistic"

        print(f"✅ Prediction: {prediction_label}")  # ✅ Debugging
        return Response({"prediction": prediction_label})

    except Exception as e:
        print(f"🚨 General Error: {e}")  # ✅ Debugging
        return Response({"error": str(e)}, status=400)




with open(r"C:\Minor Project\Backend\BreastCancer.pkl", "rb") as model_file:
    model = pickle.load(model_file)

# Expected Features
FEATURES = [
    "mean radius", "mean texture", "mean perimeter", "mean area", "mean smoothness",
    "radius error", "texture error", "perimeter error", "worst radius", "worst texture",
    "worst perimeter", "mean compactness", "mean concavity", "mean symmetry", "mean fractal dimension"
]


BREAST_CANCER_MODEL_PATH = os.path.join(settings.BASE_DIR, "BreastCancer.pkl")  # ✅ Ensure correct filename

@api_view(["POST"])
def predict_breast_cancer(request):
    print("📢 Received Data:", request.data)  # ✅ Debugging input

    required_fields = [
        "mean_radius", "mean_texture", "mean_perimeter", "mean_area", "mean_smoothness",
        "radius_error", "texture_error", "perimeter_error", "worst_radius", "worst_texture",
        "worst_perimeter", "mean_compactness", "mean_concavity", "mean_symmetry", "mean_fractal_dimension"
    ]

    for field in required_fields:
        if field not in request.data:
            print(f"🚨 Missing Field: {field}")  # ✅ Debugging
            return Response({"error": f"Missing field: {field}"}, status=400)

    try:
        input_features = []
        for field in required_fields:
            value = request.data[field]
            print(f"🔹 Converting {field}: {value} (Type: {type(value)})")  # ✅ Debugging

            try:
                num_value = float(value)  # ✅ Ensures it's a valid float
                input_features.append(num_value)
            except ValueError:
                print(f"🚨 Invalid value for {field}: {value} (Type: {type(value)})")  # ✅ Debugging
                return Response({"error": f"Invalid value for {field}. Must be a number."}, status=400)

        features = np.array([input_features], dtype=np.float64)
        print("✅ Features Array:", features)  # ✅ Debugging

        if not os.path.exists(BREAST_CANCER_MODEL_PATH):
            return Response({"error": "Breast cancer model file not found."}, status=500)

        breast_cancer_model = joblib.load(BREAST_CANCER_MODEL_PATH)
        prediction_result = breast_cancer_model.predict(features)
        prediction_label = "Malignant" if prediction_result[0] == 1 else "Benign"

        print(f"✅ Prediction: {prediction_label}")  # ✅ Debugging
        return Response({
            "prediction": prediction_label,
            "features": features.tolist(),
            "message": "Prediction Successful ✅"
        })

    except Exception as e:
        print(f"🚨 General Error: {e}")  # ✅ Debugging
        return Response({"error": str(e)}, status=400)


from fastapi import FastAPI, HTTPException
import pickle
import pandas as pd

app = FastAPI()

# Load the Model
model_path = r"C:\Minor Project\Backend\Heart.pkl"
try:
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
except Exception as e:
    raise Exception(f"Failed to load model: {str(e)}")

@app.get("/")
def root():
    return {"message": "Heart Disease Prediction API is running!"}

@app.post("/predict")
def predict(data: dict):
    required_fields = {"age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalch", "exang", "oldpeak", "slope", "ca", "thal"}
    if not required_fields.issubset(data.keys()):
        raise HTTPException(status_code=400, detail=f"Missing required fields: {required_fields - data.keys()}")
    try:
        # Convert JSON data to DataFrame
        df = pd.DataFrame([data])
        # Make Prediction
        prediction = model.predict(df)
        return {"prediction": int(prediction[0])}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/new_predict")
def new_predict(data: dict):
    required_fields = {"age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalch", "exang", "oldpeak", "slope", "ca", "thal"}
    if not required_fields.issubset(data.keys()):
        raise HTTPException(status_code=400, detail=f"Missing required fields: {required_fields - data.keys()}")
    try:
        # Convert JSON data to DataFrame
        df = pd.DataFrame([data])
        # Make Prediction
        prediction = model.predict(df)
        return {"new_prediction": int(prediction[0])}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

