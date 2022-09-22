from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='mainpage.mainpage'),
    path('lections', views.lections, name='mainpage.lections'),
    path('labs', views.labs, name='mainpage.labs'),

]