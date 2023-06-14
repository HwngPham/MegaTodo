start:
	python main.py

deps:
	pipenv requirements > requirements.txt

image:
	make deps && docker build . -t fastapi-api

container:
	docker run -dp 80:8000 fastapi-api
