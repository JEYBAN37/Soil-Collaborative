from django.db import models
from django.core.validators import RegexValidator

from .enums import generos, etnia, tipo_documento, condicion, tipo_actividad, tipo_predio, tipo_posesion_cultivo


class InformacionEconomicaProductor(models.Model):
    actividad_principal = models.CharField(max_length=50, choices=tipo_actividad, null=False, blank=False)
    actividad_secundaria = models.CharField(max_length=50, choices=tipo_actividad, null=True, blank=True)
    ingreso_total_hogar = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    ingreso_total_venta = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    costo_mantenimiento = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    dias_mes_trabajo_cultivo = models.IntegerField(null=False, blank=False)
    dias_mes_trabajo_no_cultivo = models.IntegerField(null=False, blank=False)
    es_asociado = models.BooleanField(null=False, blank=False)
    nombre_asociacion = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.actividad_principal

    class Meta:
        verbose_name = 'Informacion Economica Productor'
        verbose_name_plural = 'Informacion Economica Productores'


class Productor(models.Model):
        
    numeros_validator = RegexValidator(
        regex=r'^\d+$',
        message='Este campo solo debe contener números.'
    )

    texto_validator = RegexValidator(
        regex=r'^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$',
        message='Este campo solo debe contener letras.'
    )

    nombre = models.CharField(max_length=20, null=False, blank=False, validators=[texto_validator])
    apellido = models.CharField(max_length=20, null=False, blank=False,validators=[texto_validator])
    genero = models.CharField(max_length=1, choices=generos, null=False, blank=False)
    etnia = models.CharField(max_length=1, choices=etnia, null=False, blank=False)
    tipo_documento = models.CharField(max_length=1, choices=tipo_documento, null=False, blank=False)
    numero_documento = models.CharField(max_length=20, null=False, blank=False, validators=[numeros_validator])
    condicion = models.CharField(max_length=1, choices=condicion, null=False, blank=False)
    departamento = models.CharField(max_length=50, null=False, blank=False)
    municipio = models.CharField(max_length=50, null=False, blank=False)
    vereda = models.CharField(max_length=50, null=False, blank=False)
    informacion_economica = models.OneToOneField(InformacionEconomicaProductor, on_delete=models.CASCADE, null=True)
    
    @property


    def nombre_completo(self):
        return self.nombre + ' ' + self.apellido

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = 'Productor'
        verbose_name_plural = 'Productores'
    

class Predio(models.Model):
    productor = models.ForeignKey(Productor, on_delete=models.CASCADE, null=False, blank=False)
    departamento = models.CharField(max_length=50, null=False, blank=False)
    municipio = models.CharField(max_length=50, null=False, blank=False)
    vereda = models.CharField(max_length=50, null=False, blank=False)
    tipo_predio = models.CharField(max_length=50, choices=tipo_predio, null=False, blank=False)
    tipo_posesion_cultivo = models.CharField(max_length=50, choices=tipo_posesion_cultivo, null=False, blank=False)
    coordenadas = models.CharField(max_length=50, null=False, blank=False)
    altitud = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    area_cacao = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, default=0)
    area_otros_cultivos = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, default=0)
    area_rastrojo = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False, default=0)

    def __str__(self):
        return self.departamento + ' ' + self.municipio + ' ' + self.vereda

    class Meta:
        verbose_name = 'Predio'
        verbose_name_plural = 'Predios'
