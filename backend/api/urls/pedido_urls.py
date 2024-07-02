from django.urls import path
from api.views import pedido_views as views


urlpatterns = [
    path('/adicionar/',views.addOrderItems,name="adicionar-ordem"),
    path('/MeusPedidos/',views.getMyOrders,name="minhas-ordens"),
    path('/<str:pk>/',views.getOrderById,name="user-ordem"),
]