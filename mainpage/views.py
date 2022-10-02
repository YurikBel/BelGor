from django.shortcuts import render


def index(request):
    return render(request, 'mainpage.html')


def lections(request):
    return render(request, 'lections.html')


def labs(request):
    return render(request, 'labs.html')

def converter(request):
    return render(request, 'converter.html')


def python(request):
    return render(request, 'python.html')