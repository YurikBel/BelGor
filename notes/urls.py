from django.urls import path
from . import views


urlpatterns = [
    path('python', views.python, name='notes.python'),
    path('cpp', views.cpp, name='notes.cpp'),
    path('graph1', views.graph1, name='notes.graph1'),
    path('graphBase', views.graphBase, name='notes.graphBase'),
    path('LaTex', views.LaTex, name='notes.LaTex'),
    path('LaTexStat1', views.LaTexStat1, name='notes.LaTexStat1'),
    path('latex_tikz', views.latex_tikz, name='notes.latex_tikz'),
]