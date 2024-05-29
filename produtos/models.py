from django.db import models

class alimento(models.Model):
    localizacao = models.CharField(max_length=60)
    data_validade = models.DateField()
    tabela_nutricional = models.CharField(max_length=200)
    tipo = models.CharField(max_length=20)

class vestuario(models.Model):
    localizacao = models.CharField(max_length=60)
    cor = models.CharField(max_length=20)
    tamanho = models.CharField(max_length=10)
    tipo = models.CharField(max_length=20)
    

#usar para importar o banco os comandos:
#pyton manage.py makemigrations
#deposi pyton manage.py migrate para jogar para o banco de dados
    