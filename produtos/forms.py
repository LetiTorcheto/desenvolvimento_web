from django.forms import ModelForm
from produtos.models import alimento
from produtos.models import vestuario

class alimentosForm(ModelForm):
    class meta:
        model = alimento
        fields = ['localizacao', 'data_validade', 'tabela_nutricional', 'tipo']
        
class vestuarioForms(ModelForm):
    class meta:
        model = vestuario
        fields = ['localizacao', 'cor', 'tamanho', 'tipo']