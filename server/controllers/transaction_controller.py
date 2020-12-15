from server.models import transaction_model, listing_model
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for
)
from werkzeug.security import check_password_hash, generate_password_hash
from server.controllers.token import token_required
import json

bp = Blueprint('transaction', __name__, url_prefix='/transaction')


@bp.route('/history', methods=['GET', 'POST'])
@token_required
def showTransactions():
    transaction = transaction_model.TransactionModel()
    req = request.json
    history = transaction.getTransactionByUser(session['userId'])
    response = {'transactionList': []}
    for item in history:
        singleTransaction = {}
        singleTransaction['title'] = 'BLANK'  # TODO: Implement with game API to get title (Can get gameId from item)
        singleTransaction['price'] = item['price']
        singleTransaction['date'] = item['transactionDate']
        response['transactionList'].append(singleTransaction)

    return json.dumps(response)
