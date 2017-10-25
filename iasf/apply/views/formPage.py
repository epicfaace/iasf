# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.urls import reverse_lazy
from django.http import HttpResponseRedirect
from iasf.apply.models import Application
from iasf.apply.forms import ApplicationForm
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
    # form_class = ApplicationForm

    def dispatch(self, *args, **kwargs):
        # todo: error handling here.
        try:
            class ApplicationFormCustom(ApplicationForm):
                class Meta(ApplicationForm.Meta):
                    fields = Application.getFields(int(self.kwargs['step']))
            self.form_class = ApplicationFormCustom
        except ValueError as verr:
            return HttpResponseRedirect(reverse_lazy('apply:form-page-start'))
        except Exception as ex:
            return HttpResponseRedirect(reverse_lazy('apply:form-page-start'))
        try:
            self.application = Application.objects.get(account=self.request.user)
        except Application.DoesNotExist:
            return HttpResponseRedirect(reverse_lazy('apply:form-page-start'))
        return super(FormPage, self).dispatch(*args, **kwargs)
    def get_object(self):
        return self.application
    
    def form_valid(self, form):
        # This method is called when valid form data has been POSTed.
        # It should return an HttpResponse.
        return super(FormPage, self).form_valid(form)

    def get_pages(self):
        """Used by the template to get the page information (for display in the sidebar).
        """
        return Application.pages
    def get_page_number(self):
        """Returns current page number, used by the template.
        """
        return int(self.kwargs['step'])