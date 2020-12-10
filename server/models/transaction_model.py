from server import db


# Transaction table from the database
class TransactionModel:
    def __init__(self, transactionId=None):
        self.database = db.connection
        self.dataCur = db.connection.cursor()
        self.transactionId = transactionId
        self.listingId = None
        self.sellerId = None
        self.buyerId = None
        self.price = None
        self.transactionDate = None

        if transactionId is not None:
            self.dataCur.execute('SELECT * FROM Transaction WHERE transactionId= ' + "'" + str(transactionId) + "'")
            results = self.dataCur.fetchone()
            if results:
                self.transactionId = results['transactionId']
                self.listingId = results['listingId']
                self.price = results['price']
                self.buyerId = results['buyerId']
                self.sellerId = results['sellerId']
                self.transactionDate = results['transactionDate']

    def getTransactionId(self):
        return self.transactionId

    def getListingId(self):
        return self.listingId

    def getSellerId(self):
        return self.sellerId

    def getBuyerId(self):
        return self.buyerId

    def getPrice(self):
        return self.price

    def getTransactionDate(self):
        return self.transactionDate

    def addTransaction(self, listingId, sellerId, buyerId, price):
        self.dataCur.execute(
            'INSERT INTO Transaction (listingId,sellerId,buyerId,price,transactionDate) VALUES (' \
            + "'" + str(listingId)
            + "'," + "'" + str(sellerId) \
            + "'," + "'" + str(buyerId) \
            + "'," + "'" + str(price) \
            + "', NOW()" \
            + '  )')
        self.database.commit()

    def getTransactionBySeller(self, sellerId):
        self.dataCur.execute(
            'SELECT * FROM Transaction WHERE sellerId= ' + "'" + str(sellerId)
        )
        results = self.dataCur.fetchall()
        return results

    def getTransactionByBuyer(self, buyerId):
        self.dataCur.execute(
            'SELECT * FROM Transaction WHERE buyerId= ' + "'" + str(buyerId)
        )
        results = self.dataCur.fetchall()
        return results
