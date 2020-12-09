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

bp = Blueprint('auth', __name__)

# TODO: Implement endpoints using listings_model

