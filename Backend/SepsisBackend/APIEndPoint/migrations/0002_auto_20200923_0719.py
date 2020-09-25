# Generated by Django 3.1.1 on 2020-09-23 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('APIEndPoint', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patients',
            old_name='troponinl',
            new_name='troponini',
        ),
        migrations.AlterField(
            model_name='patients',
            name='age',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='patients',
            name='gender',
            field=models.FloatField(),
        ),
    ]