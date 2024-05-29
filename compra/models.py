from django.db import models

class solicitacao(models.Model):
    data_retirada= models.DateField()
class status(models.Model):
    descricao = models.CharField(max_length=200)
class feedback(models.Model):
    comentario= models.CharField(max_length=200)
    
#usar para importar o banco os comandos:
#pyton manage.py makemigrations
#deposi pyton manage.py migrate para jogar para o banco de dados
    
