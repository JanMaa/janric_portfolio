from django.shortcuts import render

def home(request):

    # Render app template with context
    return render(request, 'webpage/home.html', {})