from flask import Flask, jsonify, render_template, request, session

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/other_page')
def other_page():
    return render_template('other_page.html')
