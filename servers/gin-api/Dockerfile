FROM golang:1.20-alpine

# Bypass apk permission
USER root

WORKDIR /usr/build

COPY . .
RUN apk update & apk add musl-dev gcc
RUN go build api/main.go

CMD ./main
