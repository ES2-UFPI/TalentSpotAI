# Generated by Django 5.0.7 on 2024-08-01 09:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='vaga',
            name='compativel',
            field=models.BooleanField(default=False),
        ),
    ]
