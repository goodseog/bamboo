from flask_restful import Resource


class RootAPI(Resource):
    def get(self):
        return {
            'title': 'Title',
            'body': 'API class Routing test!!'
        }
