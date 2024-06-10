from django.shortcuts import render, redirect
from receptores.forms import receptorForm
from django.contrib import messages

def receptor(request):
    return render(request, 'receptor.html')

from django.shortcuts import render

def login_view(request):
    return render(request, 'login.html', {'loc': '/login/', 'error': '', 'errorclass': ''})

def register_view(request):
    return render(request, 'login.html', {'loc': '/register/', 'error': '', 'errorclass': ''})

def create(request):
    form = receptorForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')
