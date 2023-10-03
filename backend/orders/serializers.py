from rest_framework import serializers
from .models import OrdersModel

class OrderSerializer(serializers.ModelSerializer):
  class Meta:
    model = OrdersModel
    fields = '__all__'