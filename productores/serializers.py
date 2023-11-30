from rest_framework import serializers

from .models import Predio, Productor, InformacionEconomicaProductor


class PredioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Predio
        fields = ['id', 'productor_id', 'departamento', 'municipio', 'vereda', 'tipo_predio', 'tipo_posesion_cultivo',
                  'coordenadas', 'altitud', 'area_cacao', 'area_otros_cultivos', 'area_rastrojo']
        extra_kwargs = {
            "altitud": {
                "error_messages": {
                    "invalid": "El valor de la altitud debe ser un número.",
                    "required": "La altitud es un campo requerido."
                }
            },
        }


class InformacionEconomicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformacionEconomicaProductor
        fields = ['id', 'actividad_principal', 'actividad_secundaria', 'ingreso_total_hogar', 'ingreso_total_venta',
                  'costo_mantenimiento', 'dias_mes_trabajo_cultivo', 'dias_mes_trabajo_no_cultivo', 'es_asociado',
                  'nombre_asociacion']


class ProductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productor
        fields = ['id', 'nombre', 'apellido', 'genero', 'etnia', 'tipo_documento', 'numero_documento', 'condicion',
                  'departamento', 'municipio', 'vereda', 'informacion_economica_id']
        extra_kwargs = {
            "nombre": {
                "error_messages": {
                    "max_length": "Solo se permite el nombre con 20 carcteres",
                    "required": "El nombre es un campo requerido"
                }
            },
            "apellido": {
                "error_messages": {
                    "max_length": "Solo se permite el nombre con 20 carcteres",
                    "required": "El Apellido es un campo requerido"
                }
            },
            "tipo_documento": {
                "error_messages": {
                    "invalid_choice": "El valor debe ser una enumeración válidaa.",
                    "required": "El Tipo de documento es un campo requerido"
                }
            },
            "etnia": {
                "error_messages": {
                    "invalid_choice": "El valor debe ser una enumeración válidaa.",
                    "required": "la etnia es un campo requerido"
                }
            },
            "altitud": {
                "error_messages": {
                    "invalid": "El valor de la altitud debe ser un número.",
                    "required": "La altitud es un campo requerido."
                }
            },
            "genero":{
                "error_messages":{
                    "invalid_choice": "El valor debe ser una enumeración válidaa.",
                    "required": "El Genero es un campo requerido"
                }
            },
            "condicion":{
                "error_messages":{
                    "invalid_choice": "El valor debe ser una enumeración válidaa.",
                    "required": "La condicion es un campo requerido"
                }
            }
        }
