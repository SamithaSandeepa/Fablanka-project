# Generated by Django 4.0.5 on 2022-08-13 05:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0004_news_is_active'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='is_active',
            new_name='status',
        ),
    ]