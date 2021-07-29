from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Textapp.models import File
from Textapp.serializers import FileSerializer

from django.core.files.storage import default_storage



@csrf_exempt
def FileApi(request, id=0):
    if request.method == 'GET':
        Files = File.objects.all()
        Fileserializer = FileSerializer(Files, many=True)
        return JsonResponse(Fileserializer.data, safe=False)


