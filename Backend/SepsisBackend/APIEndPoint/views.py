from datetime import datetime
from rest_framework import status
from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import PatientSerializer
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from APIEndPoint.TrainedModel.SepsisDetect import processData, cols
from .models import User


# Create your views here.
class PatientView(APIView):
    permission_classes = (AllowAny, )
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # d = datetime(2015, 10, 9, 23, 55, 59, 342380)
        # data = request.data
        data = {}
        for k in cols:
            data[k] = request.data[k]
        for k in data.keys():
            print(k, " : ", data[k])
            try:
                data[k] = float(data[k])
            except ValueError:
                print(k)
        data['name'] = "Patient Name"
        data['datetime'] = "2020-09-16T18:10:30.779Z"
        data['patient_id'] = "12"

        # data['datetime'] = d
        # for k in data.keys():
        #     print(k, " : ", data[k])
        p_serializer = PatientSerializer(data=data)
        if (p_serializer.is_valid()):
            # output = 90.3
            output = processData(data)
            response = {
                'success': True,
                'output': output,
            }
            print("\ncorrect\n")
            return Response(response, status=status.HTTP_201_CREATED)
        else:
            response = {
                'success': False,
            }
            print("\nnot correct\n")
            return Response(response, status=status.HTTP_401_UNAUTHORIZED)


@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    print(username, password)
    if username is None or password is None:
        return Response({'authenticate': ''},
                        status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.get(username=username, password=password)
    if not user:
        return Response({'authenticate': ''})
    token, _ = Token.objects.get_or_create(user=user)
    response = {'authenticate': 'true', 'token': token.key}
    return Response(response, status=status.HTTP_200_OK)


@api_view(["POST"])
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'authenticate': ''},
                        status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create(username=username, password=password)
    if not user:
        return Response({'authenticate': ''})
    user.save()
    token, _ = Token.objects.get_or_create(user=user)
    response = {'authenticate': 'true', 'token': token.key}
    return Response(response, status=status.HTTP_200_OK)
