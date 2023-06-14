start:
	go run ./api/main.go

image:
	docker build . -t gin-api

container:
	docker run -dp 80:8000 gin-api
