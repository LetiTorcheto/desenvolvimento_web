# Generated by Django 5.0.6 on 2024-06-26 00:28

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('produto', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('retirada', models.CharField(blank=True, max_length=200, null=True, verbose_name='retirada do produto')),
                ('situacao_retirada', models.BooleanField(default=False, verbose_name='se o pedido foi entregue ou não')),
                ('data_retirada', models.DateTimeField(blank=True, null=True, verbose_name='data de retirada do produto')),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Endereco',
            fields=[
                ('endereco', models.CharField(blank=True, max_length=200, null=True)),
                ('cidade', models.CharField(blank=True, max_length=200, null=True)),
                ('numero_contato', models.CharField(blank=True, max_length=200, null=True)),
                ('pais', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('ordem', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='pedidos.pedido')),
            ],
        ),
        migrations.CreateModel(
            name='PedidoItem',
            fields=[
                ('nome', models.CharField(blank=True, max_length=200, null=True)),
                ('quantidade', models.IntegerField(blank=True, default=0, null=True)),
                ('imagem', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('ordem', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='pedidos.pedido')),
                ('produto', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='produto.produto')),
            ],
        ),
    ]
