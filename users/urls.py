from django.urls import path
from . import views

urlpatterns = [
  path('login/', views.user_login, name='user_login'),
  path('client/register/', views.client_register, name='client_register'),
  path('owner/register/', views.owner_register, name='owner_register'),
  path('logout/', views.user_logout, name='user_logout'),
]