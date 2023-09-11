from rest_framework import serializers
from .models import AboutUsModel

class AboutUsSerializer(serializers.ModelSerializer):
  class Meta:
    model = AboutUsModel
    fields = '__all__'