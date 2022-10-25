from django.shortcuts import render


def python(request):
    return render(request, 'python.html')


def cpp(request):
    return render(request, 'cpp.html')


def graph1(request):
    return render(request, 'convP.html')


def graphBase(request):
    return render(request, 'grPy.html')


def LaTex(request):
    return render(request, 'LaTex.html')


def LaTexStat1(request):
    return render(request, 'LaTexStat1.html')

def latex_tikz(request):
    return render(request, 'latex_tikz.html')