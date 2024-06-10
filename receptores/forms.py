from django.forms import ModelForm
from receptores.models import receptor

class receptorForm(ModelForm):
    class meta:
        model = receptor
        fields = ['cnpj', 'nome', 'senha', 'email']