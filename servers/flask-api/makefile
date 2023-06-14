start:
	gunicorn 'main:app'

dev:
	python main.py

image:
	docker build . -t flask-api

container:
	docker run -dp 80:8000 flask-api
