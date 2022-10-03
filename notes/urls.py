from django.urls import path
from . import views


urlpatterns = [
    path('python', views.python, name='notes.python'),
    path('cpp', views.cpp, name='notes.cpp'),
    path('graph1', views.graph1, name='notes.graph1'),
]