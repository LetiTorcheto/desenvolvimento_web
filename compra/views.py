from django.shortcuts import render
from django.http import HttpResponse

def compra(request):
    return HttpResponse('Compra')

def carrinho(request):
    return HttpResponse('carrinho')
