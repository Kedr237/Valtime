from django.db import models
from django.contrib.postgres.fields import ArrayField

class AboutUsModel(models.Model):
  description = models.TextField()
  contacts = ArrayField(models.CharField(max_length=30))
  json = models.JSONField(default=dict)

  def __str__(self):
    return 'aboutUs'