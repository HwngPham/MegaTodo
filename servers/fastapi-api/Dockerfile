FROM python:3.10-alpine

WORKDIR /usr/app

COPY . .

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1
ENV DEBUG=false
RUN pip install -r requirements.txt

EXPOSE 8000
CMD python main.py
