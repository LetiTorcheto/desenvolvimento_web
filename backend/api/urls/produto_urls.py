from django.urls import path
from api.views import produto_views as views


urlpatterns = [
    path('',views.getProducts,name="produto"),
    path('/<str:pk>/reviews/',views.createProductReview,name="criar-review"),
    path('/top/',views.getTopProducts,name="top-produto"),
    path('/<str:pk>/',views.getProduct,name="produto"),
]