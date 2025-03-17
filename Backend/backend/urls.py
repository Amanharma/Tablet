from django.contrib import admin
from django.urls import path, include
from api.views import react_redirect  # ✅ Import the redirect view

urlpatterns = [
    path("", react_redirect, name="react-home"),  # ✅ Redirect Django homepage to React
    path("admin/", admin.site.urls),
    path("api/", include("api.urls")),
]
