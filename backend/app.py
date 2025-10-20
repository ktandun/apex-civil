#!/usr/bin/env python3

import smtplib
import json
from datetime import datetime
from email.mime.text import MIMEText

from flask import Flask, request, jsonify
from flask_cors import CORS
from pathlib import Path
from flask_crontab import Crontab
from config import *

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": [
            "https://ktandun.github.io",
            "https://staging.waikatodrilling.co.nz",
            "https://waikatodrilling.co.nz",
            "https://www.waikatodrilling.co.nz",
            "https://www.apexcivil.co.nz",
            "http://localhost:5173"
        ]
    }
})
crontab = Crontab(app)


@app.route("/", methods=["POST"])
def home():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid or missing JSON"}), 400

    # For example, assume data contains a 'name'
    name = data.get("name", None)
    email = data.get("email", None)
    message = data.get("message", None)
    source = data.get("source", None)

    if name and email and message and source:
        utc_now = datetime.utcnow().strftime("%Y%m%d-%H%M%S")
        file_name = f"query-{utc_now}.txt"
        with open(file_name, "w") as f:
            f.write(request.data.decode("utf-8"))

    return "OK"


@crontab.job(minute="*/5")
def find_queries_and_email():
    files = list(Path(".").glob("query-*.txt"))

    processed_files = []

    for f in files:
        # Skip if it already ends with -processed.txt
        if f.stem.endswith("-processed"):
            continue

        print(f"Processing file {f}")
        with open(f, "r", encoding="utf-8") as file:
            try:
                data = json.load(file)
                send_email(
                    data.get("name"),
                    data.get("email"),
                    data.get("message"),
                    data.get("source"),
                )

                processed_files.append(f)

            except json.JSONDecodeError as e:
                print(f"Error parsing {f.name}: {e}")

    for f in processed_files:
        new_name = f.with_name(f.stem + "-processed" + f.suffix)

        f.rename(new_name)
        print(f"Renamed: {f.name} → {new_name.name}")


def send_email(name, email, message, source):
    msg = MIMEText(f"""
        Received query
        From: {name}
        Email: {email}
        Message: {message}
        """)

    msg["Subject"] = f"{source} query from {name}"
    msg["From"] = "Query Notifier"
    msg["To"] = "enquiries@waikatodrilling.co.nz"

    # SMTP server settings (example: Gmail)
    smtp_server = "smtp.gmail.com"
    smtp_port = 587
    username = EMAIL_USERNAME
    password = EMAIL_PASSWORD

    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()  # Secure the connection
            server.login(username, password)
            server.send_message(msg)
            print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")


if __name__ == "__main__":
    app.run(debug=True)
