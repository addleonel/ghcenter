from django.contrib import admin
from .models import ContactModel, Product, Profile

admin.site.register(ContactModel)
admin.site.register(Product)
admin.site.register(Profile)

