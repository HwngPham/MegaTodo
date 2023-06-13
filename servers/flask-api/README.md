> Flask CLI is messing up with relative import, which leads to separating the app into multiple modules troublesome. No auto-gen API documentation as well. Sometime suggestions do not work. Such a poor developing experience!

Requirements

- python >= 3.10
- pipenv

Prepare env
```
cp .env.example .env
pipenv shell
pipenv install
```

Run production server
```
make start
```

Run development server
```
make dev
```
