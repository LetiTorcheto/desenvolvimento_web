from django.contrib import admin
from .models import *
from pedidos.models import *

admin.site.register(Produto)
admin.site.register(Review)
admin.site.register(OrdemItem)
admin.site.register(Endereco)

@admin.register(Ordem)
class OrdemAdmin(admin.ModelAdmin):
    list_display = [
        "user", "created","estoque"
    ]