# Generated by Django 4.1 on 2022-08-13 04:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pastevent', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pastevent',
            name='image_project_m',
            field=models.ImageField(null=True, upload_to=''),
        ),
    ]
