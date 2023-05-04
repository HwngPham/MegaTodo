from django.urls import path
from todo.urls import router

urlpatterns = [] + router.urls
