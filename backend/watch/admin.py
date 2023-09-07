from django.contrib import admin
from .models import WatchModel, BrandModel


class WatchModelAdmin(admin.ModelAdmin):
  actions = ['clone']
  def clone(self, request, queryset):
    for obj in queryset:
      obj.pk = None
      obj.save()
  clone.short_description = "Клонировать" 

class BrandModelAdmin(admin.ModelAdmin):
  actions = ['clone']
  def clone(self, request, queryset):
    for obj in queryset:
      obj.pk = None
      obj.save()
  clone.short_description = "Клонировать" 


admin.site.register(WatchModel, WatchModelAdmin)
admin.site.register(BrandModel, BrandModelAdmin)