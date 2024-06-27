
from django.core.exceptions import RequestDataTooBig
from django.shortcuts import render
from datetime import datetime

from rest_framework import status

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.serializers import Serializer

from produto.models import *
from .models import *
from api.serializers import ProductSerializer, OrderSerializer

#verificar alteração e armazenar dados do pedido
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data
    print(data)
    pedidoItem = data['pedidoItem']

    if pedidoItem and len(pedidoItem) == 0:
        return Response({'Atencao': 'Nenhum item de pedido', "status": status.HTTP_400_BAD_REQUEST})
    else:
     
        pedido = Pedido.objects.create(
            user=user,
        )

      

        shipping = Endereco.objects.create(
            pedido=pedido,
            Endereco=data['Endereco']['endereco'],
            cidade=data['Endereco']['cidade'],
            numero_contato=data['Endereco']['numero_contato'],
            pais=data['Endereco']['pais'],
        )
      
        #verificação das informações
        for i in pedidoItem:
          
            product = Produto.objects.get(_id=i['_id'])

            item = PedidoItem.objects.create(
                product=product,
                order=pedido,
                nome=product.nome,
                qty=i['qty'],
                image=product.image.url,
            )

            product.countInStock -= int(item.qty)
            product.save()

        serializer = OrderSerializer(pedido, many=False)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)


 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrderById(request, pk):

    user = request.user

    try:
        order = Pedido.objects.get(_id=pk)
        if   order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'Atencao': 'Não autorizado a visualizar este pedido'},
                     status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({'Atencao': 'A ordem não existe'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, pk):
    order = Pedido.objects.get(_id=pk)
    order.save()
    return Response('Pedido confirmado', status=status.HTTP_200_OK)
