from django.urls import path

from .views import PredioApiView, RegistroApiView, InformacionEconomicaApiView,CargarDb

urlpatterns = [
    path('predios', PredioApiView.as_view(), name='lista-predios'),
    path('productores', RegistroApiView.as_view(), name='registrar_productores'),
    path('registro_informacion_economica', InformacionEconomicaApiView.as_view(), name='informacion-economica'),
    path('cargar_archivo', CargarDb.as_view(), name='cargar-archivo-excel')
]
