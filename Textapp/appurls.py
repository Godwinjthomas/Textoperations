from django.conf.urls import url
from Textapp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    url(r'^file$', views.FileApi),
]
