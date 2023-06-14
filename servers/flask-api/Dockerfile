FROM python:3.10 as build

WORKDIR /usr/build
COPY . .

RUN pip install pipenv
RUN python -m pipenv requirements > requirements.txt

FROM python:3.10 as dist

WORKDIR /usr/www

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

COPY --from=build /usr/build/src ./src
COPY --from=build /usr/build/main.py ./main.py
COPY --from=build /usr/build/.env ./.env
COPY --from=build /usr/build/requirements.txt ./requirements.txt
RUN pip install Cmake & pip install -r requirements.txt

EXPOSE 8000
CMD python main.py
