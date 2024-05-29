from django.forms import ModelForm
from doadores.models import doador

class doadorForm(ModelForm):
    class meta:
        model = doador
        fields = ['cnpj', 'nome']