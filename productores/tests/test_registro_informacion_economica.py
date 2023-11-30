import json
import os

from django.test import TestCase, Client

from ..models import InformacionEconomicaProductor


class InformacionEconomicaRegisterTestCase(TestCase):

    def tearDown(self):
        InformacionEconomicaProductor.objects.all().delete()

    def setUp(self):
        self.client = Client()
        self.url = '/api/registro_informacion_economica'
        file_path = os.path.join(os.path.dirname(__file__), './responses/informacion_economica.json')
        self.assert_data = json.loads(open(file_path, encoding='utf-8').read())

    def test_registro(self):
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data, self.assert_data)
