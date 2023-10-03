from django.db import models
from django.contrib.postgres.fields import ArrayField

class AboutUsModel(models.Model):
  description = models.TextField()
  contacts = ArrayField(models.CharField(max_length=30))

  def __str__(self):
    return 'aboutUs'