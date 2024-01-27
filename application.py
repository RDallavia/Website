from flask import Flask, render_template, request, url_for

application = Flask(__name__)

@application.route('/')
def index():
    return render_template("index.html")