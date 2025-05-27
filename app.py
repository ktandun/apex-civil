from flask import Flask, render_template

app = Flask(__name__)


def render_to_file(source_filename, target_filename, data=None):
    data = render_template(source_filename, data=data)
    with open(target_filename, "w") as f:
        f.write(data)


key_projects = [
    {
        "image": "images/optimized/hero-800.jpg",
        "title": "Tarawera Landing",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
    },
    {
        "image": "images/optimized/hero-800.jpg",
        "title": "Acacia Bay",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
    },
    {
        "image": "images/optimized/hero-800.jpg",
        "title": "Marshall Road",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
    },
]


with app.app_context():
    render_to_file("main.html", "index.html")
    render_to_file("our-services.html", "our-services.html")
    render_to_file("our-services-civil-construction.html", "civil-construction.html")
    render_to_file("our-services-project-management.html", "project-management.html")
    render_to_file("our-services-land-development.html", "land-development.html")
    render_to_file("key-projects.html", "key-projects.html", data=key_projects)
