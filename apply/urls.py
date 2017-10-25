from django.conf.urls import url
from .views import FormPage

urlpatterns = [
    url(r'^', FormPage.as_view(), name='form-page')
]