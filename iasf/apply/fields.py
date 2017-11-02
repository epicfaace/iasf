from django.forms import fields
from django import forms
from jsonschema import validate, SchemaError
from django.contrib.postgres.fields import JSONField
import json
from .schemas import JSONListFieldSchemas
from django.core.exceptions import ValidationError

class JSONSchemaField(JSONField):
    """
    A field that will ensure the data entered into it is valid JSON *and*
    internally validate to a JSON schema of your choice.
    Code initially from: https://stackoverflow.com/questions/33460690/django-models-add-validation-to-custom-field
    """
    def __init__(self, *args, **kwargs):
        # self.schema = kwargs.pop('schema', {})
        super(JSONSchemaField, self).__init__(*args, **kwargs)

    def clean(self, raw_value, model_instance):
        return super(JSONSchemaField, self).clean(raw_value, model_instance)
        try:
            # raw_value = [{"score": 1, "exam": "a"}]
            validate(raw_value, JSONListFieldSchemas.schema['scores_ap'])
        except (ValidationError, SchemaError) as err:
            print "ERROR"
            print err
            raise ValidationError(err)
        return super(JSONSchemaField, self).clean(raw_value, model_instance)

class JSONListSchemaField(JSONSchemaField):
    def __init__(self, *args, **kwargs):
        super(JSONListSchemaField, self).__init__(*args, **kwargs)

class ActivitiesField(JSONField):
    pass
class ScoresAPField(JSONField):
    pass