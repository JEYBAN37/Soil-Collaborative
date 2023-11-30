import json
import os

from django.test import Client, TestCase

from ..models import Productor
from ..serializers import ProductorSerializer


class RegistroProductorTestCase(TestCase):

    def tearDown(self):
        Productor.objects.all().delete()

    def setUp(self):
        self.client = Client()
        self.url = '/api/productores'
        file_path = os.path.join(os.path.dirname(__file__), './responses/listado_productor.json')
        self.assert_data = json.loads(open(file_path, encoding='utf-8').read())

    def test_registro(self):
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 201)
        


    def test_nombre_texto(self):
         self.tearDown()
         Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')

         self.assert_data['nombre'] = "longitud de texto mayor a 20 caracteres"

         response = self.client.post(self.url, self.assert_data)
         self.assertEqual(response.status_code, 400)

    def test_campo_obligatorio_nombre(self):
        self.tearDown()
        
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
      
        self.assert_data['nombre'] = ""
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

    def test_apellido_texto(self):
        self.tearDown()
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
        self.assert_data['apellido'] = "este apellio es mayor a 20 caracteres :)))))))))))"
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)



    def test_apellido_obligatorio(self):
        self.tearDown()
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
    

        self.assert_data['apellido'] = ""
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

    def test_registro_documento_invalido(self):
        self.tearDown()

        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        

        self.assert_data['numero_documento'] = "sdsdsdsdsds"
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

    def test_tipo_documento_valido(self):
        self.tearDown()

        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
        self.assert_data['tipo_documento'] = "CEDULAS"
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

    def test_nombre_solo_caracteres(self):
        self.tearDown()
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
        self.assert_data['nombre'] = 15641
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)
        

    def test_apellido_solo_caracteres(self):
        self.tearDown()
        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
       
        self.assert_data['apellido'] = 15641
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

    
    def test_tipo_genero_valido(self):
        self.tearDown()

        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
        self.assert_data['genero'] = "MASCULINO"
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)

        
    def test_tipo_etnia_valido(self):
        self.tearDown()

        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        

        self.assert_data['etnia'] = "INFIGENFA"
        
        response = self.client.post(self.url, self.assert_data)
        self.assertEqual(response.status_code, 400)
    
    def test_tipo_condicion_valido(self):
        self.tearDown()

        Productor.objects.create(id=1, nombre='Juan', apellido='Perez', genero='M', etnia='N', tipo_documento='CC',
                                 numero_documento='123456', condicion='P', departamento='Antioquia',
                                 municipio='Medellin',
                                 vereda='Laureles')
        
        self.assert_data['condicion'] = "DEZPLAZADO"
        
        response = self.client.post(self.url, self.assert_data)
  
        self.assertEqual(response.status_code, 400)

   
        

        




