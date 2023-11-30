import json
import os
from django.test import Client
from django.test import TestCase
from ..models import Predio, Productor


class RegisterPrediosTestCase(TestCase):
    def tearDown(self):
        Predio.objects.all().delete()
        Productor.objects.all().delete()

    def setUp(self):
        self.client = Client()
        self.url = '/api/predios'
        file_path = os.path.join(os.path.dirname(__file__), './responses/predio.json')
        self.assert_data = json.loads(open(file_path, encoding='utf-8').read())

    def test_registro_predio(self):
        self.tearDown()
        productor = Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')

        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 201)
        
        self.assertEqual(response.data, {'data': productor.id})

    def test_registro_predio_invalido(self):
        self.tearDown()
        Productor.objects.create( nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        

        self.assert_data['altitud'] = "fdf"
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)
