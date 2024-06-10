# Generated by Django 5.0.6 on 2024-06-09 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='alimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('localizacao', models.CharField(max_length=60)),
                ('data_validade', models.DateField()),
                ('tabela_nutricional', models.CharField(max_length=200)),
                ('tipo', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='vestuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('localizacao', models.CharField(max_length=60)),
                ('cor', models.CharField(max_length=20)),
                ('tamanho', models.CharField(max_length=10)),
                ('tipo', models.CharField(max_length=20)),
            ],
        ),
    ]
