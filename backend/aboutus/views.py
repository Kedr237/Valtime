from .models import AboutUsModel
from .serializers import AboutUsSerializer
from rest_framework import generics

class AboutUsView(generics.ListAPIView):
  queryset = AboutUsModel.objects.all()
  serializer_class = AboutUsSerializer