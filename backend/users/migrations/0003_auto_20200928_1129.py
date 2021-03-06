# Generated by Django 2.2.16 on 2020-09-28 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_auto_20200928_1126"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="last_updated",
        ),
        migrations.RemoveField(
            model_name="user",
            name="timestamp_created",
        ),
        migrations.AlterField(
            model_name="user",
            name="email",
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="first_name",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="user",
            name="last_name",
            field=models.TextField(blank=True, null=True),
        ),
    ]
