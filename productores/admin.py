from django.contrib import admin

from .models import Productor, Predio, InformacionEconomicaProductor


@admin.register(Productor)
class ProductorAdmin(admin.ModelAdmin):
    list_display = (
    'nombre', 'apellido', 'genero', 'etnia', 'tipo_documento', 'numero_documento', 'condicion', 'departamento',
    'municipio', 'vereda')
    search_fields = (
    'nombre', 'apellido', 'genero', 'etnia', 'tipo_documento', 'numero_documento', 'condicion', 'departamento',
    'municipio', 'vereda')
    list_filter = (
    'nombre', 'apellido', 'genero', 'etnia', 'tipo_documento', 'numero_documento', 'condicion', 'departamento',
    'municipio', 'vereda')


@admin.register(Predio)
class PredioAdmin(admin.ModelAdmin):
    list_display = (
    'productor', 'departamento', 'municipio', 'vereda', 'tipo_predio', 'tipo_posesion_cultivo', 'coordenadas',
    'altitud', 'area_cacao', 'area_otros_cultivos', 'area_rastrojo')
    search_fields = (
    'productor', 'departamento', 'municipio', 'vereda', 'tipo_predio', 'tipo_posesion_cultivo', 'coordenadas',
    'altitud', 'area_cacao', 'area_otros_cultivos', 'area_rastrojo')
    list_filter = (
    'productor', 'departamento', 'municipio', 'vereda', 'tipo_predio', 'tipo_posesion_cultivo', 'coordenadas',
    'altitud', 'area_cacao', 'area_otros_cultivos', 'area_rastrojo')


@admin.register(InformacionEconomicaProductor)
class InformacionEconomicaProductorAdmin(admin.ModelAdmin):
    list_display = (
    'productor', 'actividad_principal', 'actividad_secundaria', 'ingreso_total_hogar', 'ingreso_total_venta',
    'costo_mantenimiento', 'dias_mes_trabajo_cultivo', 'dias_mes_trabajo_no_cultivo', 'es_asociado',
    'nombre_asociacion')
    search_fields = (
    'productor', 'actividad_principal', 'actividad_secundaria', 'ingreso_total_hogar', 'ingreso_total_venta',
    'costo_mantenimiento', 'dias_mes_trabajo_cultivo', 'dias_mes_trabajo_no_cultivo', 'es_asociado',
    'nombre_asociacion')
    list_filter = (
    'productor', 'actividad_principal', 'actividad_secundaria', 'ingreso_total_hogar', 'ingreso_total_venta',
    'costo_mantenimiento', 'dias_mes_trabajo_cultivo', 'dias_mes_trabajo_no_cultivo', 'es_asociado',
    'nombre_asociacion')
