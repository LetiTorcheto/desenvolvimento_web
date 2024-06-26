from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import BLANK_CHOICE_DASH

class Produto(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nome = models.CharField('nome', max_length=100)
    imagem = models.ImageField('imagem do produto',null=True,blank = True,default = "/images/placeholder.png",upload_to="images/")
    marca = models.CharField('marca do produto',max_length=200,null=True,blank=True)
    categoria = models.CharField('categoria do produto',max_length=200,null=True,blank=True)
    descricao = models.TextField('descrição do produto',null=True,blank=True)
    reviews = models.DecimalField('avaliação do produto',max_digits=12,decimal_places=2,null=True,blank=True)
    numReviews = models.IntegerField('numero de avaliações',null=True,blank=True,default=0)
    estoque = models.IntegerField('numero de produtos em estoque',null=True,blank=True,default=0)
    create = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)
    
    def __str__(self):
        return self.nome +" | "+self.marca

class Review(models.Model):
    produto = models.ForeignKey('produto',on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    nome = models.CharField('nome',max_length=200,null=True,blank=True)
    reviews =  models.IntegerField('avaliação do produto',null=True,blank=True,default=0)
    comentario = models.TextField('comentarios do produto',null=True,blank=True)
    created = models.DateTimeField(auto_now_add=True)
    _id =  models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.reviews)