from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView 
from .router import router

from core.views import index

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
    path('api/token/verify/', TokenVerifyView.as_view()),
    path('api/account/', include('account.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'^(?:.*)/?$', index, name="index"),
]
