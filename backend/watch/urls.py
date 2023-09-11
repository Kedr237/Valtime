from django.urls import path
from . import views

urlpatterns = [
    path('brand/', views.BrandView.as_view()),
    path('watch/', views.WatchView.as_view()),
]
