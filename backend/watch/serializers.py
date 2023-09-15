from rest_framework import serializers
from .models import BrandModel, WatchModel

class BrandSerializer(serializers.ModelSerializer):
  class Meta:
    model = BrandModel
    fields = '__all__'

class WatchSerializer(serializers.ModelSerializer):
  brand = serializers.SlugRelatedField('name', read_only=True)
  class Meta:
    model = WatchModel
    fields = '__all__'