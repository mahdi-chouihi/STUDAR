from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from house.serializers import HouseSerializer
from house.models import House
from django.http import JsonResponse
from django.core import serializers


   
@csrf_exempt
def houseApi(request,id=0):
    if request.method == 'POST':
        house_data = JSONParser().parse(request)
        house_serializer = HouseSerializer(data=house_data)
        if house_serializer.is_valid():
            house_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'GET':
        if id==0:
            houses = House.objects.all()
            house_serializer = HouseSerializer(houses, many=True)
            return JsonResponse(house_serializer.data, safe=False)
        else:
            house=House.objects.get(id_house=id)
            house_serializer = HouseSerializer(house, many=False)
            return JsonResponse(house_serializer.data, safe=False)
    try:
        house = House.objects.get(id_house=id)
    except House.DoesNotExist:
        return JsonResponse({"error": "House not found"}, status=404)
    if request.method == 'PUT':
        house_data = JSONParser().parse(request)
        house_serializer = HouseSerializer(house, data=house_data)
        if house_serializer.is_valid():
            house_serializer.save()
            return JsonResponse({"message": "House updated successfully"})
        else:
            return JsonResponse(house_serializer.errors, status=400)
    elif request.method=='DELETE':
        house=House.objects.get(id_house=id)
        house.delete()
        return JsonResponse("Deleted Successfully",safe=False)

def get_data_by_landlord_id(request, Id):
    try:
        house=House.objects.filter(user=Id)
        house_serializer = HouseSerializer(house, many=True)
        return JsonResponse(house_serializer.data, safe=False)
        # if house_serializer.is_valid():
        return JsonResponse(house_serializer.data, safe=False)
        #return JsonResponse(house_serializer.errors,safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
def getFilterData(request,rooms,uni,type):
    houses=House.objects.all()
    if rooms!=None:
        houses=houses.objects.filter(bedrooms=rooms)
    if uni!=None:
        houses=houses.objects.filter(university=uni)
    if type!=None and type!="":
        houses=houses.objects.filter(Property_Type=type)
    house_serializer = HouseSerializer(houses, many=True)
    return JsonResponse(house_serializer.data, safe=False)
        
        