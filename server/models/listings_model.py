from server import db
from hashlib import md5

# Listings table
class ListingsModel:
    def __init__(self,listingId=None,gameId=None,userId=None,price=None,console=None,condition=None,additionalNotes=None,buyOrTrade=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.listingId = listingId
        self.userId = None
        self.gameId = None
        self.price = None
        self.console = None
        self.condition = None
        self.additionalNotes = None
        self.buyOrTrade = None

        if listingId is not None:
            self.dataCur.execute('SELECT * FROM Listings WHERE listingId = ' + "'" + str(listingId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.userId = results['userId']
                self.gameId = results['gameId']
                self.price = results['price']
                self.console = results['console']
                self.additionalNotes= results['additionalNotes']
                self.buyOrTrade = results['buyOrTrade']

    def getListingId(self):
        return self.listingId

    def getUserId(self):
        return self.userId

    def getGameId(self):
        return self.gameId

    def getPrice(self):
        return self.price

    def getConsole(self):
        return self.console

    def getCondition(self):
        return self.condition

    def getAdditionalNotes(self):
        return self.additionalNotes

    def getBuyOrTrade(self):
        return self.buyOrTrade

    def getListingsForConsole(self,console):
        self.dataCur.execute(
            'SELECT * FROM Listings WHERE console = ' + "'" + console + "'"
        )
        return self.dataCur.fetchall()

    def getListingsForGame(self,gameId,console):
        if console is not None:
            self.dataCur.execute(
                'SEELCT * FROM Listings WHERE gameId = ' + str(gameId) + ' AND console = ' + str(console)
            )
        else:
            self.dataCur.execute(
                'SELECT * FROM Listings WHERE gameId = ' + str(gameId)
            )
        return self.dataCur.fetchall()

    def insertListing(self):
        self.dataCur.execute(
            'INSERT INTO Listings (userId,gameId,price,console,additionalNotes) VALUES (' + "'" + self.userId+ "'," + "'" + self.gameId+ "'," + "'" + self.price+ "'," + '  )')
        self.database.commit()


    def updateField(self, field, attribute):
        self.dataCur.execute('UPDATE Listings Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE listingId = " + "'" + str(
            self.listingId) + "'")
        self.database.commit()

    def isExist(self, field, attribute):
        self.dataCur.execute('SELECT * FROM Listings WHERE ' + field + ' = ' + "'" + attribute + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False
