#!/usr/bin/python
activate_this = '../env/python3EcoGame/bin/activate_this.py'
with open(activate_this) as _file:
    exec(_file.read(), dict(__file__=activate_this))

import sys

from app import app
app.debug = False
