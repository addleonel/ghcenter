from django.urls import path
from . import views

app_name='contact'

urlpatterns = [
    path('', views.welcome_view, name='welcome'),
    path('contact/', views.contact_view, name='contact_view'),
    path('products/', views.products_view, name='products_view'),
    path('about/', views.about_view, name='about_view'),
]