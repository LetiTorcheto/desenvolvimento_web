from django.shortcuts import render
from django.http import HttpResponse

def produtos(request):
    return HttpResponse('Produtos')

def alimentos(request):
    return HttpResponse('Alimentos')

def roupas(request):
    return HttpResponse('Roupas')
