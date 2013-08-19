import os
from urlparse import urlsplit

SERVER_NAME = os.environ['SERVER_NAME']

mongo_url = urlsplit(os.environ['MONGOLAB_URL'])
MONGO_HOST = mongo_url.hostname
MONGO_PORT = mongo_url.port if mongo_url.port is not None else 27017
MONGO_USERNAME = mongo_url.username
MONGO_PASSWORD = mongo_url.password
MONGO_DBNAME = mongo_url.path.strip('/')

DOMAIN = {
    'files': {
        'resource_methods': ['GET', 'POST'],
        'item_methods': ['GET', 'PATCH', 'DELETE'],
        'schema': {
            'path': { 'type': 'string', 'required': True },
            'x': { 'type': 'integer', 'required': True },
            'y': { 'type': 'integer', 'required': True },
        }
    },
}
