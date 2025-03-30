from django.db import models

class ModelPatrimonio(models.Model):
    localizacao = models.CharField(max_length=255)
    ni = models.CharField(max_length=255)
    descricao = models.TextField()


