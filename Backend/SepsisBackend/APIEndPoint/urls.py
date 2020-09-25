from django.contrib import admin
from django.urls import path, include
from .views import PatientView, login, signup
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers

# p_router = routers.DefaultRouter()  # add this
# p_router.register()
# p_router.register('data', PatientView, 'patient')
"""userRouter = routers.DefaultRouter()
userRouter.register('login', Login, 'user')
"""
urlpatterns = [
    path('', PatientView.as_view(), name="pview"),
    path('login/', login, name="login"),
    path('signup/', signup, name="signup"),
    path('givedata/', PatientView.as_view(), name='update'),
]
