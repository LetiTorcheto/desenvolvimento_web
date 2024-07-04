from django.contrib import admin
from .models import *

admin.site.register(Produto)
admin.site.register(Review)
admin.site.register(PedidoItem)
admin.site.register(Endereco)

@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = [
        "user","created", "data_retirada"]
    
