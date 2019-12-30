from flask import Flask, render_template
from flask_restful import Api
import pandas as pd

from api.root import RootAPI

app = Flask(__name__)
api = Api(app)

api.add_resource(RootAPI, '/api')
# api.add_resource(RootAPI, '/api/<argument:type>')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3001)
