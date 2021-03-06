import os
from dotenv import load_dotenv
from flask import Flask
from flask_mysqldb import MySQL

load_dotenv()

db = MySQL()


def create_app():
    # create and configure the app
    app = Flask(__name__)

    app.config['SECRET_KEY'] = os.urandom(12)

    # database connection credentials
    app.config['MYSQL_USER'] = os.getenv("MYSQL_USER")
    app.config['MYSQL_PASSWORD'] = os.getenv("MYSQL_PASSWORD")
    app.config['MYSQL_HOST'] = os.getenv("MYSQL_HOST")
    app.config['MYSQL_DB'] = os.getenv("MYSQL_DB")
    app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

    app.config.update(
        MAIL_SERVER=os.getenv("MAIL_SERVER"),
        MAIL_PORT=os.getenv("MAIL_PORT"),
        MAIL_USE_SSL=True,
        MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
        MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
        MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER")
    )

    db.init_app(app)

    from server.controllers import user_controller
    app.register_blueprint(user_controller.bp)

    from server.controllers import listings_controller
    app.register_blueprint(listings_controller.bp)

    from server.controllers import transaction_controller
    app.register_blueprint(transaction_controller.bp)

    from server.controllers import profile_controller
    app.register_blueprint(profile_controller.bp)

    return app
