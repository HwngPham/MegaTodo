dev:
	python manage.py runserver

start:
	gunicorn core.wsgi

migrate:
	export DJANGO_SETTINGS_MODULE=core.settings && python manage.py makemigrations && python manage.py migrate

requirements:
	pipenv requirements > requirements.txt

image:
	make requirements && docker build . -t django-api-with-graph

start_image:
	docker run -dp 4000:4000 django-api-with-graph
