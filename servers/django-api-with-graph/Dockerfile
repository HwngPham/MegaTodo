FROM python:3.10-alpine

WORKDIR /usr/www
COPY . /usr/www

ENV DJANGO_SETTINGS_MODULE=core.settings
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

RUN pip install -r requirements.txt \
  && python manage.py makemigrations \
  && python manage.py migrate

EXPOSE 4000
CMD python manage.py runserver 0.0.0.0:4000
