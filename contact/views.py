import os
from django.contrib import messages
from django.conf import settings
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import login, authenticate, update_session_auth_hash, get_user_model
from django.http import HttpResponse, Http404, HttpResponseRedirect, HttpResponseNotFound
from django.http import JsonResponse
from django.views.generic import CreateView, TemplateView, View, RedirectView
from django.views.generic.detail import DetailView
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserChangeForm, PasswordChangeForm
from .models import *

from .forms import *
from django.contrib.auth.views import LoginView, LogoutView

from django.utils import timezone
from django.views import generic
from django.db.models import Q
from django.contrib.auth.mixins import LoginRequiredMixin

from django.core.mail import send_mail, EmailMessage, EmailMultiAlternatives
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string, get_template
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_text
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.html import strip_tags



# to follow button
from django.http import JsonResponse

from django.shortcuts import render
from .models import ContactModel 

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