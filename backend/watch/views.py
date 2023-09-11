from .models import BrandModel, WatchModel
from .serializers import BrandSerializer, WatchSerializer
from rest_framework import generics

class BrandView(generics.ListAPIView):
  queryset = BrandModel.objects.all()
  serializer_class = BrandSerializer

class WatchView(generics.ListAPIView):
  queryset = WatchModel.objects.all()
  serializer_class = WatchSerializer