from rest_framework import serializers
from .models import ModelPatrimonio

class PatrimonioSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelPatrimonio
        fields = '__all__'