from django.urls import path
from . import views


urlpatterns = [
    path('adicionar/',views.addOrderItems,name="adicionar-ordem"),
    path('MeusPedidos/',views.getMyOrders,name="minhas-ordens"),
    path('<str:pk>/',views.getOrderById,name="user-ordem"),
]
