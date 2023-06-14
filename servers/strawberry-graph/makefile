start:
	python main.py

deps:
	pipenv requirements > requirements.txt

image:
	make deps & docker build . -t strawberry-graph

container:
	docker run -dp 80:8000 strawberry-graph
