# iasf
Indian American Scholarship Foundation website

django-admin startp

django-forms
Form wizard info: https://django-formtools.readthedocs.io/en/latest/wizard.html#how-it-works

# Setup
```
mkvirtualenv iasf
workon iasf

pip install -r requirements.txt

python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
# Important commands
```
pip freeze > requirements.txt
python manage.py runserver ...
```

# Deployment information
Azure + PostgreSQL
Uses Azure blob storage

More info about deploying to azure: https://docs.microsoft.com/en-us/azure/app-service/web-sites-python-configure