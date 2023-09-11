from django.contrib import admin
from django.urls import path, include
from .views import serveImgView

urlpatterns = [
    path('api/img/<path:img>', serveImgView),
    path('admin/', admin.site.urls),
    path('api/', include('watch.urls')),
    path('api/', include('aboutus.urls')),
]