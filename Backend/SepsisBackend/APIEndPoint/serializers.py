from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, Serializer
from .models import Patients


class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patients
        fields = '__all__'

    def create(self, validated_data):
        p = Patients(**validated_data)
        p.save()
        return p