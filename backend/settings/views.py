from django.views.static import serve
from django.conf import settings

def serveImgView(request, img):
  return serve(request, img, document_root=settings.MEDIA_ROOT)