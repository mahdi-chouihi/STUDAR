from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from ads.serializers import AD_roommateSerializer
from ads.models import AD_roommate
from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers


   
@csrf_exempt
def adsApi(request,id=0):
    if request.method == 'POST':
        ads_data = JSONParser().parse(request)
        ads_serializer = AD_roommateSerializer(data=ads_data)
        if ads_serializer.is_valid():
            ads_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'GET':
        ads = AD_roommate.objects.all()
        ads_serializer = AD_roommateSerializer(ads, many=True)
        return JsonResponse(ads_serializer.data, safe=False)
    elif request.method=='DELETE':
        ads=AD_roommate.objects.get(Ad_Id=id)
        ads.delete()
        return JsonResponse("Deleted Successfully",safe=False)
def getAD(request, Id):
    try:
        ad=AD_roommate.objects.filter(Ad_Id=Id)
        ad_serializer = AD_roommateSerializer(ad, many=False)
        return JsonResponse(ad_serializer.data, safe=False)
        # if house_serializer.is_valid():
        return JsonResponse(house_serializer.data, safe=False)
        #return JsonResponse(house_serializer.errors,safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)



























