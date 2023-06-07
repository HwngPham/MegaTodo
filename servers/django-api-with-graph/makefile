start:
	python manage.py runserver

migrate:
	export DJANGO_SETTINGS_MODULE=core.settings && python manage.py makemigrations && python manage.py migrate

requirements:
	pipenv requirements > requirements.txt

image:
	make requirements && docker build . -t django-api-with-graph
