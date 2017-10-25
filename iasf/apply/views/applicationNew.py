from django.views import View
from iasf.apply.models import Application
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
    
class ApplicationNew(LoginRequiredMixin, View):
    """
    Creates a new application for the user. This is a one-time process.
    """
    def get(self, request, *args, **kwargs):
        if Application.objects.filter(account=self.request.user).exists():
            # don't create multiple forms.
            return HttpResponseRedirect(reverse_lazy('apply:form-page-start'))
        application = Application(account=self.request.user);
        application.save()
        return HttpResponseRedirect(reverse_lazy('apply:form-page-start'))
        # return super().get(request, *args, **kwargs)
    