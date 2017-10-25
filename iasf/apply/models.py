# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from django.core.validators import RegexValidator

class Submissions:
    pass

class Application(models.Model):
    """
Documents to upload:
Resume (optional)
SAT / ACT score report (required). -- maybe check with Collegeboard if it can be sent officially and directly to us?
High school transcript -- sent through Parchment?

Additional documents for financial aid:
Financial aid package / cost of attendance letter from the university
Tuition bill for applicant / other dependents if necessary
2016 tax return; 1040 along with supporting documentation
CSS profile report
Any additional documents (optional)

    """
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50, blank=True)
    account = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #todo: blank=False
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_home = models.CharField(validators=[phone_regex], max_length=15, blank=True, verbose_name="Home Phone") # validators should be a list
    phone_mobile = models.CharField(validators=[phone_regex], max_length=15, blank=True, verbose_name="Mobile Phone") # validators should be a list
    parent_first_name = models.CharField(max_length=50, blank=True)
    parent_middle_name = models.CharField(max_length=50)
    parent_last_name = models.CharField(max_length=50, blank=True)
    claim_indian_maternal = models.NullBooleanField(blank=True, verbose_name="Claim to Indian descent via maternal grandparents")
    claim_indian_paternal = models.NullBooleanField(blank=True, verbose_name="Claim to Indian descent via paternal grandparents")
    # second page:
    high_school = models.CharField(max_length=100)
    
    #date_created = models.Date
    def __str__(self):              # __unicode__ on Python 2
        return self.first_name