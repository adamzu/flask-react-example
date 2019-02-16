#!/usr/bin/env bash
export FLASK_APP=myapp
export FLASK_DEBUG=1
source venv/bin/activate
webpack --watch &
python run.py
