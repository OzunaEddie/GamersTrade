from server import db
from hashlib import md5


# Listings table
class ListingsModel:
    def __init__(self, listingId=None, gameId=None, userId=None, price=None, console=None, condition=None,
                 additionalNotes=None, sold=False, buyOrTrade=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.listingId = listingId
        self.userId = userId
        self.gameId = gameId
        self.price = price
        self.console = console
        self.condition = condition
        self.additionalNotes = additionalNotes
        self.sold = sold
        self.buyOrTrade = buyOrTrade

        if listingId is not None:
            self.dataCur.execute('SELECT * FROM Listings WHERE listingId = ' + "'" + str(listingId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.userId = results['userId']
                self.gameId = results['gameId']
                self.price = results['price']
                self.console = results['console']
                self.condition = results['condition']
                self.additionalNotes = results['additionalNotes']
                self.sold = results['sold']
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

    def getIsSold(self):
        return self.sold

    def getListingsForConsole(self, console):
        self.dataCur.execute(
            'SELECT * FROM Listings WHERE console = ' + "'" + console + "'"
        )
        return self.dataCur.fetchall()

    def getListingsForGame(self, gameId, console, sold=False):
        if console is not None:
            self.dataCur.execute(
                'SEELCT * FROM Listings WHERE gameId = ' + str(gameId) + ' AND console = ' + str(
                    console) + 'AND sold = ' + str(sold)
            )
        else:
            self.dataCur.execute(
                'SELECT * FROM Listings WHERE gameId = ' + str(gameId) + ' AND sold = ' + str(sold)
            )
        return self.dataCur.fetchall()

    def insertListing(self):
        self.dataCur.execute(
            'INSERT INTO Listings (userId,gameId,price,console,conditions,additionalNotes,sold,buyOrTrade) VALUES(%s,%s,%s,%s,%s,%s,%s,%s)' \
            , (str(self.userId), str(self.gameId), str(self.price), str(self.console), str(self.condition),
               str(self.additionalNotes), int(self.sold),
               str(self.buyOrTrade))
        )

        self.database.commit()

    def removeListing(self, listingId=None):
        if listingId:
            self.dataCur.execute("DELETE FROM Listings WHERE listingId=%s", (str(listingId)))
        else:
            self.dataCur.execute("DELETE FROM Listings WHERE listingId=%s", (str(self.listingId)))
        self.database.commit()

    def updateField(self, field, attribute):
        self.dataCur.execute(
            'UPDATE Listings Set ' + field + ' = ' + "'" + attribute + "'" + "WHERE listingId = " + "'" + str(
                self.listingId) + "'")
        self.database.commit()

    def isExist(self, field, attribute):
        self.dataCur.execute('SELECT * FROM Listings WHERE ' + field + ' = ' + "'" + attribute + "'")
        results = self.dataCur.fetchone()
        if results:
            return True
        return False
