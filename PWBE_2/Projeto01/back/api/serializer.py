from rest_framework import serializers
from .models import Professor, Diciplinas

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class DisciplinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diciplinas
        fields = '__all__'
