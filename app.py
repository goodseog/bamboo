from flask import Flask, render_template
from flask_restful import Api
from flask_cors import CORS, cross_origin
import pandas as pd

from api.root import RootAPI

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)

api.add_resource(RootAPI, '/api')
# api.add_resource(RootAPI, '/api/<argument:type>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
