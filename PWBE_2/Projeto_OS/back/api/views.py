from django.shortcuts import render
from .models import ModelPatrimonio
from .serializer import PatrimonioSerializer
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework import generics, status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

class PatrimonioView(ListCreateAPIView):
    queryset = ModelPatrimonio.objects.all()
    serializer_class = PatrimonioSerializer
    permission_classes = [IsAuthenticated]