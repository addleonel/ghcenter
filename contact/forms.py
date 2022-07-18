from cProfile import label
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

from django.utils.translation import gettext_lazy as _


class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=140, required=True)
    last_name = forms.CharField(max_length=140, required=False)
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'password1',
            'password2',
        )

    def __init__(self, *args, **kwargs):
        super(SignUpForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].label = 'Nombre'
        self.fields['last_name'].label = 'Apellido'
        self.fields['email'].label = 'Correo Electrónico'
        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Usuario')

class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email',]
        widgets = {
            'first_name':forms.TextInput(attrs={'placeholder':'Nombre'}),
            'last_name': forms.TextInput(attrs={'placeholder': 'Apellido'}),
            'email': forms.TextInput(attrs={'placeholder': 'Correo'}),
        }

class DeleteUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = []