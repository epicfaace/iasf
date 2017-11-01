from django import forms
from django.forms import ModelForm
from django.conf import settings
from django.contrib.auth.models import User

class SignupForm(ModelForm):
    password2 = forms.CharField(label='Reenter password', widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ['username', 'password', 'password2', 'email', 'first_name', 'last_name']
        widgets = {
            'password': forms.PasswordInput()
        }
    def __init__(self, *args, **kwargs):
        super(SignupForm, self).__init__(*args, **kwargs)
        self.fields['username'].help_text = None
        # Make all fields required on the form:
        for key in self.fields:
            self.fields[key].required = True