from django.shortcuts import render
from .models import QuestionModel
from django.http import JsonResponse
# Create your views here.
def HomePage(request):
    Questions = QuestionModel.objects.all()
    return render(request,'home.html',{'Questions':Questions})

def GraphPage(request,pk):
    return render(request,'detail.html')

def GraphApi(request):
    questoins = QuestionModel.objects
    data = {'data':list(questoins.values())}
    return JsonResponse(data,safe=True)