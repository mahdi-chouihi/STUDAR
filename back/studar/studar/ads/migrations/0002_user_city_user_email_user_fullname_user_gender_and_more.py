# Generated by Django 5.0.4 on 2024-05-01 17:15

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='fullName',
            field=models.CharField(default='Unknown', max_length=45),
        ),
        migrations.AddField(
            model_name='user',
            name='gender',
            field=models.CharField(default='Unknown', max_length=45),
        ),
        migrations.AddField(
            model_name='user',
            name='job',
            field=models.CharField(default='Unknown', max_length=10),
        ),
        migrations.AddField(
            model_name='user',
            name='password',
            field=models.CharField(max_length=32, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='phone',
            field=models.BigIntegerField(default='Unknown'),
        ),
        migrations.AddField(
            model_name='user',
            name='picture',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='university',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AlterField(
            model_name='ad_roommate',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ad_roommates', to='ads.user'),
        ),
    ]
