from django.db import models

class receptor(models.Model):
    nome = models.CharField('nomde', max_length=100)
    cnpj = models.CharField('cnpj', max_length=11)
    email = models.EmailField('email', max_length=100)