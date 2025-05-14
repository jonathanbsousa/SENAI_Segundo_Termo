from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

urlpatterns = [
    # JWT auth
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Sign Up
    path('signup/', SignUpView.as_view(), name='signup'),

    # Sensores
    path('sensores/', Sensores_List_Create.as_view(), name='sensores-list-create'),
    path('sensores/<int:pk>/', Sensores_Retrieve_Update_Destroy.as_view(), name='sensores-detail'),

    # Ambientes
    path('ambientes/', Ambientes_List_Create.as_view(), name='ambientes-list-create'),
    path('ambientes/<int:pk>/', Ambientes_Retrieve_Update_Destroy.as_view(), name='ambientes-detail'),

    # Histórico
    path('historico/', Historico_List_Create.as_view(), name='historico-list-create'),
    path('historico/<int:pk>/', Historico_Retrieve_Update_Destroy.as_view(), name='historico-detail'),

    # Uploads XLSX
    path('upload/sensores/', UploadXLSXView.as_view(), name='upload-sensores'),
    path('upload/historico/', UploadHistoricoXLSXView.as_view(), name='upload-historico'),
    path('upload/ambientes/', UploadAmbientesXLSXView.as_view(), name='upload-ambientes'),
]
