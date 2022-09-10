# Generated by Django 3.2.5 on 2022-08-25 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PastEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_pastevent', models.CharField(max_length=200)),
                ('summery_pastevent', models.TextField()),
                ('content_pastevent', models.JSONField()),
                ('image_project_m', models.TextField()),
                ('status', models.BooleanField(default=True)),
            ],
        ),
    ]
