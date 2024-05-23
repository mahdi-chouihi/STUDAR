from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from request.serializers import RequestSerializer
from request.models import Request
from django.http import JsonResponse
from django.core import serializers


   
@csrf_exempt
def requestApi(request,id=0):
    if request.method == 'POST':
        request_data = JSONParser().parse(request)
        request_serializer = RequestSerializer(data=request_data)
        if request_serializer.is_valid():
            request_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == 'GET':
        requests = Request.objects.all()
        request_serializer = RequestSerializer(requests, many=True)
        return JsonResponse(request_serializer.data, safe=False)
    elif request.method=='PUT':
        request_data=JSONParser().parse(request)
        request=Request.objects.get(id_house=id)
        request_serializer=RequestSerializer(request,data=request_data)
        if request_serializer.is_valid():
            request_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    