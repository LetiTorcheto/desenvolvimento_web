from django.db import models
from django.contrib.auth.models import User
from produto.models import Produto

class Pedido(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    retirada = models.CharField('retirada do produto',max_length=200,null=True,blank=True)
    situacao_retirada = models.BooleanField('se o pedido foi entregue ou não',default=False)
    data_retirada = models.DateTimeField('data de retirada do produto',auto_now_add=False,null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True,null=True, blank=True)
    _id =  models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.created)

class PedidoItem(models.Model):
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE,null=True)
    ordem  = models.ForeignKey(Pedido,on_delete=models.SET_NULL,null=True)
    nome = models.CharField(max_length=200,null=True,blank=True)
    quantidade = models.IntegerField(null=True,blank=True,default=0)
    imagem = models.CharField(max_length=200,null=True,blank=True)
    _id =  models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.nome)

class Endereco (models.Model):
    ordem = models.OneToOneField(Pedido,on_delete=models.CASCADE,null=True,blank=True)
    endereco = models.CharField(max_length=200,null=True,blank=True)
    cidade  = models.CharField(max_length=200,null=True,blank=True)
    numero_contato = models.CharField(max_length=200,null=True,blank=True)
    pais = models.CharField(max_length=200,null=True,blank=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.endereco)
    
