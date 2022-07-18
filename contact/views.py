from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import HttpResponse
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import render
from .models import *
from .forms import *

def signup(request):
    user = get_user_model()
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        form.fields['password1'].help_text = None
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = True
            user.save()
            return HttpResponse('<h1>Done</h1>')
    else:
        form = SignUpForm()
        form.fields['password1'].help_text = None
    
    return render(request, 'signup.html', {'form': form})

class SignInView(LoginView):
    form_class = LoginForm
    template_name = 'login.html'


class SignOutView(LogoutView):
    pass

def welcome_view(request):
    return render(request, 'build/index.html')

def products_view(request):
    return render(request, 'build/index.html')

def about_view(request):
    return render(request, 'build/index.html')

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        contact = ContactModel(name=name, surname=surname, email=email, phone=phone, message=message)
        contact.save()
        return render(request, 'contact/contact.html', {'message': 'Gracias por contactarnos. En breve nos pondremos en contacto con usted.'})
    return render(request, 'contact/contact.html')