from django.urls import path
from . import views

urlpatterns = [
    path('aboutus/', views.AboutUsView.as_view()),
]
