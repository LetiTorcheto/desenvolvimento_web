from django.urls import path, include
from .views import index, catalago

urlpatterns = [
    path('', index),
    path('catalago/', catalago)
]
