# Generated by Django 3.1.1 on 2020-09-23 07:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('APIEndPoint', '0005_auto_20200923_0737'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patients',
            old_name='baseexpress',
            new_name='baseexcess',
        ),
    ]