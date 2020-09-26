from .models import Patients
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

    def put(self, request):
        for k in cols:
            try:
                # print(k, ' : ', request.data[k])
                request.data[k] = float(request.data[k])
            except ValueError:
                response = {
                    'success': False,
                }
                return Response(response, status=status.HTTP_401_UNAUTHORIZED)

        request.data['datetime'] = "2020-09-16T18:10:30.779Z"
        request.data['patient_id'] = "12"

        request.data['hosp'] = User.objects.get(username=request.user).pk

        p_serializer = PatientSerializer(data=request.data)

        if (p_serializer.is_valid()):
            output = processData(request.data)
            response = {
                'success': True,
                'output': output[0],
                'features': output[1],
            }
            request.data['sepsislabel'] = output[0]
            p_serializer = PatientSerializer(data=request.data)
            p_serializer.is_valid(raise_exception=True)
            p_serializer.save()
            print("\ncorrect\n")
            return Response(response, status=status.HTTP_201_CREATED)
        else:
            response = {
                'success': False,
            }
            print("\nnot correct\n")
            return Response(response, status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request):
        p_list = Patients.objects.filter(patient_id=request.data['patient_id'],
                                         hosp=request.user)
        val = float(request.data['sepsislabel'])
        for patient in p_list:
            patient.sepsislabel = val
            patient.save()
        return Response({'success': "data saved"})


@api_view(["POST"])
def login(request):
    username = request.data["username"]
    password = request.data["password"]
    if username is None or password is None:
        return Response({'authenticate': ''},
                        status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.get(username=username, password=password)
    if not user:
        return Response({'authenticate': ''})
    # print(username, password)
    token, _ = Token.objects.get_or_create(user=user)
    response = {'authenticate': 'true', 'token': token.key}
    return Response(response, status=status.HTTP_200_OK)


@api_view(["POST"])
def signup(request):
    print("here")
    username = request.data["username"]
    password = request.data["password"]
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
