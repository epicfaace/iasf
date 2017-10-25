from django import forms
from .models import Application

class ContactForm1(forms.ModelForm):
    class Meta:
        model = Application
        fields =  '__all__'
    #subject = forms.CharField(max_length=100)
    #sender = forms.EmailField()

class ContactForm2(forms.Form):
    message = forms.CharField(widget=forms.Textarea)