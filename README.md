# Setup
Use instructions from here to set up a virtual environment: https://docs.djangoproject.com/en/1.11/intro/contributing/#getting-a-copy-of-django-s-development-version

Steps for windows:

```
pip install virtualenvwrapper
mkvirtualenv iasf
workon iasf
```

Then set up requirements:
`pip install -r requirements.txt`

Each time you open this command prompt window, you have to type `workon iasf` before doing anything.

## DB migration
Run this; also run these commands whenever you make changes to your models.
```
python manage.py makemigrations
python manage.py migrate
```

## Running the server
`python manage.py runserver `

# Initial setup (for ashwin)
# Requirements.txt
When you install a new package:
`pip freeze > requirements.txt`

# Start
```
django-admin startproject iasf
python manage.py startapp apply
```

# User (for admin)
```
python manage.py createsuperuser
```

# Other commands
`python manage.py shell`
`python manage.py dbshell`