from django.shortcuts import render
from django.http import HttpResponse
from doadores.forms import doadorForm



def index(request):
    context = [
     {'nome': 'leticia'}
]
    return HttpResponse('Pagina de cliente')

def login_view(request):
    return render(request, 'login.html', {'loc': '/login/', 'error': '', 'errorclass': ''})

def register_view(request):
    return render(request, 'login.html', {'loc': '/register/', 'error': '', 'errorclass': ''})
