
from django.contrib import admin
from django.urls import path
from django.urls import include, re_path
from ads import views as viewA
from house import views as viewsH
from request import views as viewsR
from studar import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^ads$',viewA.adsApi),
    re_path(r'^ads/([0-9]+)',viewA.adsApi),
    re_path(r'^house$',viewsH.houseApi),
    re_path(r'^house/([0-9]+)$',viewsH.houseApi),
    re_path(r'^landlord/([0-9]+)$', viewsH.get_data_by_landlord_id, name='get_data_by_landlord_id'),
    re_path(r'^use/([0-9]+)$', viewA.getAD),
    re_path(r'^request$',viewsR.requestApi),
    
    


]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
