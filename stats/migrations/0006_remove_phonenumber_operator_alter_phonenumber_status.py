# Generated by Django 5.1.5 on 2025-04-22 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stats', '0005_employeehistory'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='phonenumber',
            name='operator',
        ),
        migrations.AlterField(
            model_name='phonenumber',
            name='status',
            field=models.CharField(choices=[('занят', 'Занят'), ('свободен', 'Свободен'), ('отдан', 'Отдан')], max_length=50),
        ),
    ]
