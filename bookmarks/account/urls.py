from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # Custom login view
    # path('login/', views.user_login, name='login'),
    # # Django auth_views
    # # # Log in-out
    # path('login/', auth_views.LoginView.as_view(), name='login'),
    # path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    # # # PW Change
    # path('password-change/', auth_views.PasswordChangeView.as_view(), name='password_change'),
    # path('password-change/done/', auth_views.PasswordChangeDoneView.as_view(), name='password_change_done'),
    # # # PW Reset
    # path('password-reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    # path('password-reset/done/', auth_views.PasswordResetDoneView.as_view(), name='password_reset_done'),
    # path('password-reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    # path('password-reset/complete/', auth_views.PasswordResetCompleteView.as_view(), name='password_reset_complete'),
    # # # Single include for all views using default urls of auth_views
    path('', include('django.contrib.auth.urls')),
    path('', views.dashboard, name='dashboard'),
]