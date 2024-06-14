from django.urls import path
from . import views


urlpatterns = [
    path('',views.getProducts,name="produtos"),
    path('<str:pk>/reviews/',views.createProductReview,name="create-review"),
    path('top/',views.getTopProducts,name="top-produto"),
    path('<str:pk>/',views.getProduct,name="produto"),
]