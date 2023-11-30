import json
import os

from django.test import TestCase

from ..models import Predio, Productor


class PrediosTestCase(TestCase):

    def tearDown(self):
        Productor.objects.all().delete()
        Predio.objects.all().delete()

    def test_listado_predios(self):
        self.tearDown()
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin', vereda='Laureles')
        Predio.objects.create(id=1, productor_id=1, departamento='Nariño', municipio='Pasto', vereda='La Esperanza',
                              tipo_predio='P', tipo_posesion_cultivo='T', coordenadas='6.123456, -75.123456',
                              altitud=1234, area_cacao=0, area_otros_cultivos=0, area_rastrojo=120)

        file_path = os.path.join(os.path.dirname(__file__), './responses/listado_predios.json')
        assert_data = json.loads(open(file_path, encoding='utf-8').read())
        response = self.client.get('/api/predios')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, assert_data)
