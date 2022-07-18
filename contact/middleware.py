from django.urls import reverse
from django.http import Http404

class RestrictStaffToAdminMiddleware:
    """
    Middleware to restrict access to the admin panel to staff members.
    """
    def __init__(self, get_response):
        self.get_response = get_response    
    
    def __call__(self, request):
        response = self.get_response(request)
        if request.path.startswith(reverse('admin:index')):
            if request.user.is_authenticated:
                if not request.user.is_staff:
                    raise Http404
            else:
                raise Http404
        return response