from django.urls import path
from . import views

urlpatterns = [
    path('/registro/',views.registerUser,name='registro'),
    path('/perfil/',views.getUserProfile,name="user_perfil"),
    path('/perfil/atualizacao/',views.updateUserProfile,name="atualizacao_perfil"),
    path('/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('/delete/<str:pk>/',views.deleteUser,name="deletarUser"),
]
