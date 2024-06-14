from django.urls import path
from . import views


urlpatterns = [
    path('add/',views.addOrderItems,name="adicionar-ordem"),
    path('myorders/',views.getMyOrders,name="minhas-ordens"),
    path('<str:pk>/',views.getOrderById,name="user-ordem"),
    path('<str:pk>/pay/',views.updateOrderToPaid,name="pay"),
]