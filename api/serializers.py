from rest_framework import serializers
from contact.models import Product
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = [
            'id', 
            'name', 
            'price', 
            'mark',
            'description', 
            'likes', 
            'image', 
            'created_at',
        ]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'is_staff')