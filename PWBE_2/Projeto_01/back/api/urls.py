from django.urls import path
from .views import listar_professores, ProfessoresView, ProfessoresDatailsView

urlpatterns = [
    path('professores', listar_professores),
    path('prof', ProfessoresView.as_view()),
    path('professor/<int:pk>', ProfessoresDatailsView.as_view())
]
