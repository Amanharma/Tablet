from django.urls import path
from .views import predict_diabetes, predict_breast_cancer, predict_autism  # ✅ Import the view

urlpatterns = [
    path("predict/diabetes/", predict_diabetes, name="predict_diabetes"),
    path("predict/breast-cancer/", predict_breast_cancer, name="predict_breast_cancer"),
     path("predict/autism/", predict_autism, name="predict_autism"),  # ✅ Added new Autism API
]
