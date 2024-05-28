from django.shortcuts import render
from django.http import HttpResponse



def index(request):
    context = [
     {'nome': 'leticia'}
]
    return HttpResponse('Pagina de cliente')
