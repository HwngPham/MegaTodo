Requirements

- python >= 3.10
- pipenv

Prepare env
```
cp .env.example .env
pipenv shell
pipenv install
make migrate
```

Start production server
```
make start
```

Start development server
```
make dev
```

Run inside a Docker container
```
make image
make start_image
```
