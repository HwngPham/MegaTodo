from django.db.models import *


class BaseModel(Model):
    class Meta:
        abstract = True
