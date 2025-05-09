# Generated by Django 5.1.5 on 2025-03-16 15:12

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0003_remove_phonenumber_operator'),
    ]

    operations = [
        migrations.AddField(
            model_name='phonenumber',
            name='operator',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='phone_numbers', to='stats.operator'),
        ),
        migrations.AddField(
            model_name='tariff',
            name='operator',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tariffs', to='stats.operator'),
        ),
    ]
