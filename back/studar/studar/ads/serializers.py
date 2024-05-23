from rest_framework import serializers
from .models import User, AD_roommate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class AD_roommateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AD_roommate
        fields = '__all__'
