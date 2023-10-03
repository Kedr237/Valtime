from django.db import models

class OrdersModel(models.Model):
  name = models.CharField(max_length=100)
  phone = models.CharField(max_length=30)
  address = models.CharField(max_length=150)

  def __str__(self):
    return self.name