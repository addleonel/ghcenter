from pyexpat import model
from django.contrib.auth.models import User
from django.db import models
from django.urls import reverse
from django.dispatch import receiver
from django.utils import timezone
from django.db.models.signals import post_save
from django.template.defaultfilters import slugify

class ContactModel(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20)
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='userprofile')
    bio = models.CharField(max_length=255, blank=True)
    description_profile = models.TextField(blank=True)
    city = models.CharField(max_length=255, blank=True, default='')
    country = models.CharField(max_length=255, blank=True, default='')
    slug = models.SlugField(null = True, unique = True, max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.user.username
    

    # def get_absolute_url(self):
    #     return reverse('contact:profile', kwargs={'slug': self.slug })

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.user)
        return super().save(*args, **kwargs)

@receiver(post_save, sender=User)
def crear_usuario_perfil(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def guardar_usuario_perfil(sender, instance, **kwargs):
    instance.userprofile.save()

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    mark = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    likes = models.IntegerField(default=0)
    image = models.URLField(max_length=2000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name