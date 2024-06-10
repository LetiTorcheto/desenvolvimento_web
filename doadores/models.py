from django.db import models

class doador(models.Model):
    cnpj = models.CharField(max_length=11)
    nome = models.CharField(max_length=30)
    senha = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    

#usar para importar o banco os comandos:
#pyton manage.py makemigrations
#deposi pyton manage.py migrate para jogar para o banco de dados
    