from rest_framework.routers import SimpleRouter
from .views import TodoViewSet

router = SimpleRouter()
router.register(prefix="", viewset=TodoViewSet, basename="todo")
urlpatterns = router.urls
