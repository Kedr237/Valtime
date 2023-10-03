from .models import OrdersModel
from .serializers import OrderSerializer
from rest_framework.generics import CreateAPIView

class OrdersView(CreateAPIView):
  queryset = OrdersModel.objects.all()
  serializer_class = OrderSerializer