FROM python:3.10-alpine

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /usr/www
COPY . .

RUN pip install -r requirements.txt

EXPOSE 8000
CMD python main.py