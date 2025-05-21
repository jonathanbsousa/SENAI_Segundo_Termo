# filters.py
import django_filters
from .models import Historico, Sensores, Ambientes
from django.db.models.functions import TruncDate
from django.db.models.functions import ExtractHour

class HistoricoFilter(django_filters.FilterSet):
    id = django_filters.NumberFilter(field_name='id')
    sensor_nome = django_filters.CharFilter(field_name='sensor__sensor', lookup_expr='iexact') 
    ambiente_nome = django_filters.CharFilter(field_name='ambiente__descricao', lookup_expr='icontains')
    timestamp__date = django_filters.DateFilter(method='filter_by_date')
    timestamp__hour = django_filters.NumberFilter(method='filter_by_hour')

    def filter_by_date(self, queryset, name, value):
        return queryset.annotate(date=TruncDate('timestamp')).filter(date=value)
    
    def filter_by_hour(self, queryset, name, value):
        return queryset.annotate(hour=ExtractHour('timestamp')).filter(hour=value)

    class Meta:
        model = Historico
        fields = ['id','ambiente_nome', 'sensor_nome', 'timestamp__date', 'timestamp__hour']

class SensoresFilter(django_filters.FilterSet):
    sensor = django_filters.CharFilter(lookup_expr='icontains')
    mac_address = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=[('ativo', 'Ativo'), ('inativo', 'Inativo')])

    class Meta:
        model = Sensores
        fields = ['sensor', 'mac_address', 'status']

class AmbientesFilter(django_filters.FilterSet):
    sig = django_filters.NumberFilter(field_name='sig')  # <- precisa estar aqui

    class Meta:
        model = Ambientes
        fields = ['sig']