from django.test import TestCase
import json
import os
from ..models import Productor


class CargarBd(TestCase):

    def tearDown(self):
        Productor.objects.all().delete()

    def test_cargar_bd(self):
        file_path = os.path.join(os.path.dirname(
            __file__), './responses/procuctores_arreglo.json')

        with open(file_path, 'r') as f:
            data = json.load(f)
            print(f)

        for data in data:
            Productor.objects.create(**data)

        response = self.client.post(
            '/api/cargar_archivo', {'productores': data})
        

        self.assertEqual(response.status_code, 201)
