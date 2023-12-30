from django.urls import path
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie

from . import views

urlpatterns = [
    path('register/', views.StudentRegistrationView.as_view(), name='student_registration'),
    path('enroll-course/', views.StudentEnrollCourseView.as_view(), name='student_enroll_course'),
    path('courses/', views.StudentCourseListView.as_view(), name='student_course_list'),
    # Both of these go the same view that will show either first module or the one provided in the URL
    # BUG: This is caching pages without taking into account the user, a user that is not enrolled into a course
    # Will see it if it was previously cached instead of failing as it should!
    path('course/<pk>/', cache_page(60*15)(views.StudentCourseDetailView.as_view()), name='student_course_detail'),
    path('course/<pk>/<module_id>/', cache_page(60*15)(views.StudentCourseDetailView.as_view()), name='student_course_detail_module'),
]