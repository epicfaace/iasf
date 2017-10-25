from django.views.generic.list import ListView
from django.utils import timezone
from iasf.apply.models import Application
from django.contrib.auth.mixins import LoginRequiredMixin
    
class ApplicationList(LoginRequiredMixin, ListView):
    model = Application
    template_name = 'apply/applicationList.html'
    redirect_field_name = 'login'

    def geta_queryset(self):
        return Application.objects.filter(user=self.request.user)
    
    #def get_context_data(self, **kwargs):
    #    context = super(ApplicationList, self).get_context_data(**kwargs)
    #    context['now'] = timezone.now()
    #    return context