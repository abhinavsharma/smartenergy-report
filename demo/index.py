import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
    abort, render_template, flash, redirect, url_for

DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def index():
  return redirect(url_for('mobile'))

@app.route("/mobile")
def mobile():
  return render_template('mobile.html')

@app.route('/account')
def account():
  return render_template('account.html')

@app.route("/favicon.ico")
def favicon():
  return app.send_static_file("favicon.ico")

if __name__ == "__main__":
  app.run(host='0.0.0.0')
