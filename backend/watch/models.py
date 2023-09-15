from django.db import models


class BrandModel(models.Model):
  name = models.CharField(max_length=30)
  description = models.TextField()
  country = models.CharField(max_length=30)
  mainGif = models.ImageField(upload_to='brands')
  def __str__(self):
    return self.name


class WatchModel(models.Model):
  name = models.CharField(max_length=80)
  description = models.TextField()
  price = models.CharField(max_length=20)
  mainPhoto = models.ImageField(upload_to='watches')
  brand = models.ForeignKey(BrandModel, on_delete=models.CASCADE)
  # charactefistics
  MECHANISM = (
    ('ME1', 'Mechanism-111'),
    ('ME2', 'Mechanism-222'),
    ('ME3', 'Mechanism-333'),
  )
  MATERIAL = (
    ('MA1', 'Material-111'),
    ('2MA', 'Material-222'),
    ('MA3', 'Material-333'),
  )
  COLOR = (
    ('C1', 'color-111'),
    ('C2', 'color-222'),
    ('C3', 'color-333'),
  )
  WATERPROTECTION = (
    ('W1', 'WaterProtection-111'),
    ('W2', 'WaterProtection-222'),
    ('W3', 'WaterProtection-333'),
  )
  SIZE = (
    ('S1', 'Size-111'),
    ('S2', 'Size-222'),
    ('S3', 'Size-333'),
  )

  mechanism = models.CharField(max_length=50, choices=MECHANISM)
  material = models.CharField(max_length=50, choices=MATERIAL)
  color = models.CharField(max_length=50, choices=COLOR)
  waterProtection = models.CharField(max_length=50, choices=WATERPROTECTION)
  size = models.CharField(max_length=50, choices=SIZE)
  # charactefistics

  def __str__(self):
    return self.name