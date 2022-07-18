from django.urls import path, include
from django.views.generic import TemplateView
from . import views

app_name='contact'

urlpatterns = [
    path('', views.welcome_view, name='welcome'),
    path('contact/', views.contact_view, name='contact_view'),
    path('products/', views.products_view, name='products_view'),
    path('about/', views.about_view, name='about_view'),
    path('login/', TemplateView.as_view(template_name='build/index.html'), name='signup'),
    path('signup/', TemplateView.as_view(template_name='build/index.html'), name='signin'),
    path('logout/',TemplateView.as_view(template_name='build/index.html') , name='signout'),
    
]