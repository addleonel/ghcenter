# Generated by Django 3.0 on 2022-06-20 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactmodel',
            name='phone',
            field=models.CharField(default=237293, max_length=20),
            preserve_default=False,
        ),
    ]
