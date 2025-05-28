from flask import Flask, render_template

app = Flask(__name__)


def render_to_file(source_filename, target_filename, data=None):
    data = render_template(source_filename, data=data)
    with open(target_filename, "w") as f:
        f.write(data)


key_projects = [
    {
        "html": "tarawera-landing.html",
        "image": "images/optimized/hero-800.jpg",
        "title": "Tarawera Landing",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
        "client": "We Build NZ",
        "more_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
        "html": "acacia-bay.html",
        "image": "images/optimized/hero-800.jpg",
        "title": "Acacia Bay",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
        "client": "We Build NZ",
        "more_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
        "html": "marshall-road.html",
        "image": "images/optimized/hero-800.jpg",
        "title": "Marshall Road",
        "service": "Project management, civil engineering",
        "location": "Hamilton",
        "details": "Apex Civil in a joint venture with company name, constructed the new Hamilton Bridge",
        "client": "We Build NZ",
        "more_details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
]


with app.app_context():
    render_to_file("main.html", "index.html")
    render_to_file("our-services.html", "our-services.html")
    render_to_file("our-services-civil-construction.html", "civil-construction.html")
    render_to_file("our-services-project-management.html", "project-management.html")
    render_to_file("our-services-land-development.html", "land-development.html")
    render_to_file("key-projects.html", "key-projects.html", data=key_projects)

    for project in key_projects:
        render_to_file(
            "key-project-details.html",
            project["html"],
            data={"project": project, "other_projects": [k for k in key_projects if k["title"] != project["title"]]},
        )
