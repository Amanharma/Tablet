from django.db import models

class DiabetesPrediction(models.Model):
    age = models.IntegerField()
    bmi = models.FloatField()
    glucose = models.FloatField()
    insulin = models.FloatField()
    blood_pressure = models.FloatField()
    # prediction = models.CharField(max_length=10)  # "Diabetic" or "Non-Diabetic"

    def __str__(self):
        return f"Age: {self.age}, BMI: {self.bmi}, Prediction: {self.prediction}"

