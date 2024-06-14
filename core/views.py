from django.shortcuts import render

def index(request):
    return render (request, 'index.html')

def catalago(request):
    return render (request, 'Catalago.html')
