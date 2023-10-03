from django.contrib import admin
from django.urls import path, include
from .views import serveImgView

urlpatterns = [
    path('media/<path:img>', serveImgView),
    path('admin/', admin.site.urls),
    path('api/', include('watch.urls')),
    path('api/', include('aboutus.urls')),
    path('api/', include('orders.urls')),
]