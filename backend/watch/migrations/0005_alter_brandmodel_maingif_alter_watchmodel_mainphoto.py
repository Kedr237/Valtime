# Generated by Django 4.2.4 on 2023-09-14 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('watch', '0004_remove_watchmodel_maingif_brandmodel_maingif'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brandmodel',
            name='mainGif',
            field=models.ImageField(upload_to='brands'),
        ),
        migrations.AlterField(
            model_name='watchmodel',
            name='mainPhoto',
            field=models.ImageField(upload_to='watches'),
        ),
    ]
