# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from iasf.apply.models import Application
from django.views.generic.edit import UpdateView

class AjaxableResponseMixin(object):
    """
    Mixin to add AJAX support to a form.
    Must be used with an object-based FormView (e.g. CreateView)
    """
    def form_invalid(self, form):
        response = super(AjaxableResponseMixin, self).form_invalid(form)
        if self.request.is_ajax():
            return JsonResponse(form.errors, status=400)
        else:
            return response

    def form_valid(self, form):
        # We make sure to call the parent's form_valid() method because
        # it might do some processing (in the case of CreateView, it will
        # call form.save() for example).
        response = super(AjaxableResponseMixin, self).form_valid(form)
        if self.request.is_ajax():
            data = {
                'pk': self.object.pk,
            }
            return JsonResponse(data)
        else:
            return response

class FormPage(AjaxableResponseMixin, UpdateView):
    template_name = 'apply/formPage.html'
    model = Application
    success_url = reverse_lazy('apply:form-page')
    fields = ['first_name', 'last_name']

    def get_object(self):
        try:
            application = Application.objects.get(account=self.request.user)
        except Application.DoesNotExist:
            return HttpResponseRedirect('apply:form-page-start')
    
    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        return super(FormPage, self).form_valid(form)