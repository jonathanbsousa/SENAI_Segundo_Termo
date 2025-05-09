from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class Sensores_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Sensores
        fields = '__all__'

class Ambientes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = '__all__'

class Historico_Serializer(serializers.ModelSerializer):
    sensor = Sensores_Serializer(read_only=True, source='sensor')
    sensor_id = serializers.PrimaryKeyRelatedField(queryset=Sensores.objects.all(), write_only=True)

    ambiente = Ambientes_Serializer(read_only=True, source='ambiente')
    ambiente_id = serializers.PrimaryKeyRelatedField(queryset = Ambientes.objects.all(), write_only=True)

    class Meta:
        model = Historico
        fields = ['id', 'sensor_id', 'sensor', 'ambiente_id', 'ambiente', 'valor', 'timestamp']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user