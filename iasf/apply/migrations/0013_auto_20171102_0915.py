# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-02 16:15
from __future__ import unicode_literals

from django.db import migrations
import iasf.apply.fields


class Migration(migrations.Migration):

    dependencies = [
        ('apply', '0012_auto_20171101_1343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='scores_ap',
            field=iasf.apply.fields.JSONListSchemaField(blank=True, null=True, verbose_name='AP Exams Taken'),
        ),
    ]
