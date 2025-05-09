from django.shortcuts import render
from .serializers import *
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

class Sensores_List_Create(ListCreateAPIView):
    queryset = Sensores.objects.all()
    serializer_class = Sensores_Serializer
    permission_classes = [IsAuthenticated]

class Sensores_Retrieve_Update_Destroy(RetrieveUpdateDestroyAPIView):
    queryset = Sensores.objects.all()
    serializer_class = Sensores_Serializer
    permission_classes = [IsAuthenticated]

class Ambientes_List_Create(ListCreateAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = Ambientes_Serializer
    permission_classes = [IsAuthenticated]

class Ambientes_Retrieve_Update_Destroy(RetrieveUpdateDestroyAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = Ambientes_Serializer
    permission_classes = [IsAuthenticated]

class Historico_List_Create(ListCreateAPIView):
    queryset = Historico.objects.all()
    serializer_class = Historico_Serializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['sensor', 'ambiente']

class Historico_Retrieve_Update_Destroy(RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()
    serializer_class = Historico_Serializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['sensor', 'ambiente']