from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Predio, Productor
from .serializers import PredioSerializer, ProductorSerializer, InformacionEconomicaSerializer


def build_response(status_code, data):
    return Response({"data": data}, status=status_code)


def build_error_response(status_code, message):
    return Response({"errors": message}, status=status_code)


class PredioApiView(APIView):
    def get(self, request):
        predios = Predio.objects.all()
        data = PredioSerializer(predios, many=True).data
        return build_response(status.HTTP_200_OK, data)

    def post(self, request):
        serializer = PredioSerializer(data=request.data)
        if serializer.is_valid():
            productor = Productor.objects.get(id=request.data["productor_id"])
            serializer.save(productor=productor)
            return build_response(status.HTTP_201_CREATED, serializer.data["id"])
        else:
            return build_error_response(status.HTTP_400_BAD_REQUEST, serializer.errors)


class RegistroApiView(APIView):
    def post(self, request):
        serializer = ProductorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            _id= serializer.data['id']
            return Response({'id':_id}, status=201)
        return Response(serializer.errors, status=400)


class InformacionEconomicaApiView(APIView):
    def post(self, request):
        serializer = InformacionEconomicaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class CargarDb(APIView):
    def post(self, request, format=None):
        serializer=ProductorSerializer(data=request.data, many=True)
        if (serializer.is_valid()):
            serializer.save()
            _id = [i['id']for i in serializer.data]
            return Response({'id':_id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
