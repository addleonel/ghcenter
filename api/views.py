from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from api.serializers import ProductSerializer
from contact.models import Product

class ProductListAPIView(APIView):
    """
    ProductListAPIView
    """
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = ProductSerializer
    model = Product

    def get(self, request, slug=None, format=None):
        products = self.model.objects.all()
        serializer = self.serializer_class(products, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, slug=None, format=None):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostLikeAPIToggle(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, slug=None, format=None, *args, **kwargs):
        obj = get_object_or_404(Product, id=kwargs['pk'])
        user = self.request.user
        updated = False
        liked = False
        if user.is_authenticated:
            if user in obj.likes.all():
                liked = False
                obj.likes.remove(user)
            else:
                liked = True
                obj.likes.add(user)
            updated = True
        
        data = {
            'updated': updated,
            'liked': liked
        }
        return Response(data)