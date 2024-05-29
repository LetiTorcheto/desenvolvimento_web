from django.shortcuts import render
from django.http import HttpResponse
from doadores.forms import doadorForm



def index(request):
    context = [
     {'nome': 'leticia'}
]
    return HttpResponse('Pagina de cliente')

def form(request):
    data = {}
    data['form'] = doadorForm()
    return render (request, 'form.html', data)
