# filters.py
import django_filters
from .models import Historico, Sensores
from django.db.models.functions import TruncDate
from django.db.models.functions import ExtractHour

class HistoricoFilter(django_filters.FilterSet):
    timestamp__date = django_filters.DateFilter(method='filter_by_date')
    timestamp__hour = django_filters.NumberFilter(method='filter_by_hour')

    def filter_by_date(self, queryset, name, value):
        return queryset.annotate(date=TruncDate('timestamp')).filter(date=value)
    
    def filter_by_hour(self, queryset, name, value):
        return queryset.annotate(hour=ExtractHour('timestamp')).filter(hour=value)

    class Meta:
        model = Historico
        fields = ['sensor', 'timestamp__date', 'timestamp__hour']

class SensoresFilter(django_filters.FilterSet):
    sensor = django_filters.CharFilter(lookup_expr='icontains')
    mac_address = django_filters.CharFilter(lookup_expr='icontains')
    status = django_filters.ChoiceFilter(choices=[('ativo', 'Ativo'), ('inativo', 'Inativo')])

    class Meta:
        model = Sensores
        fields = ['sensor', 'mac_address', 'status']