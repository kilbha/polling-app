
from django.contrib import admin
from django.urls import path
from PollApp.views import HomePage, GraphPage, GraphApi

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',HomePage),
    path('res/<int:pk>',GraphPage,name='graph'),
    path('api/',GraphApi),
]
