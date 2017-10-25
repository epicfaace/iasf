from django.conf.urls import url
from .views import FormPage, ApplicationList

app_name = 'apply'
urlpatterns = [
    url(r'^', ApplicationList.as_view(), name='application-list'),
    url(r'^form/(?P<step>\d+)/$', FormPage.as_view(), name='form-page')
]