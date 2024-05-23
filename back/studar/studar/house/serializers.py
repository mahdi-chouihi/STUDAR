from rest_framework import serializers
from .models import House
from ads.serializers import UserSerializer
class HouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = '__all__'  # Adjust fields as needed
        