from server.models import transaction_model, listings_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from server.controllers.token import token_required
import json
import logging

bp = Blueprint('transaction', __name__, url_prefix='/transaction')

@bp.route('/purchase', methods=['GET', 'POST'])
@token_required
def addTransaction():
    if request.method == 'POST':
        transaction = transaction_model.TransactionModel()
        req = request.json
        listing = listings_model.ListingsModel(listingId=req['listingId'])
        transaction.addTransaction(listingId=req['listingId'],sellerId=listing.getUserId(),buyerId=session['userId'],price=listing.getPrice())
        return json.dumps({'Added': True})

    return json.dumps({'Added': False})


@bp.route('/history', methods=['GET', 'POST'])
def showTransactions():
    transaction = transaction_model.TransactionModel()
    req = request.json
    history = transaction.getTransactionsByUser(session['userId'])
    response = {'transactionList': []}
    for item in history:
        singleTransaction = {}
        # TODO: Implement with game API to get title. Can use listingId to get gameId for game API.
        singleTransaction['title'] = 'BLANK'
        singleTransaction['price'] = item['price']
        singleTransaction['date'] = str(item['transactionDate'])
        response['transactionList'].append(singleTransaction)

    return json.dumps(response)
