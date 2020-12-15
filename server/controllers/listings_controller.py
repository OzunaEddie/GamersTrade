from hashlib import md5
from io import SEEK_CUR
from server.models import profile_model
from server.models import user_model
from server.models import listings_model

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from flask import current_app
from flask_mail import Message
from flask_mail import Mail
import json
import jwt
import datetime
from server.controllers.token import token_required

bp = Blueprint('listings', __name__, url_prefix='/listings')


@bp.route('/showListings', methods=['GET', 'POST'])
def showListingsForGame():
    listings = listings_model.ListingsModel()
    req = request.json
    return json.dumps({'gameListings': listings.getListingsForGame(gameId=req['gameId'], console=req['console'])})


@bp.route('/addListing', methods=['POST'])
@token_required
def addListing():
    error = None
    req = request.json
    listings = listings_model.ListingsModel(gameId=req['gameId'], price=req['price'], userId=session['userId'],
                                            console=req['console'], condition=req['condition'],
                                            additionalNotes=req['additionalNotes'], buyOrTrade=req['buyOrTrade'])
    listings.insertListing()
    return json.dumps({'Added': True, 'error': None})


@bp.route('/removeListing', methods=['POST'])
@token_required
def removeListing():
    error = None
    req = request.json
    listings = listings_model.ListingsModel(listingId=req['listingId'])
    listings.removeListing()
    return json.dumps({'Removed': True, 'error': error})
