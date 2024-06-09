from django.shortcuts import render
from django.http import HttpResponse

def receptor(request):
    return render(request, 'receptor.html')

def login(request):
    return render(request, 'login.html')