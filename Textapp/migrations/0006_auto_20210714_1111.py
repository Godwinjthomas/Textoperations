# Generated by Django 3.2.5 on 2021-07-14 05:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Textapp', '0005_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='file',
            name='created_date',
        ),
        migrations.RemoveField(
            model_name='file',
            name='modified_date',
        ),
    ]
