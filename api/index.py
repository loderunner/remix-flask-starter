from flask import Flask

app = Flask(__name__)


@app.route("/api/message")
def hello_world():
    return "Hello, World!"
