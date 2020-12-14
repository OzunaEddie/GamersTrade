DROP DATABASE IF EXISTS GamersTrade;

CREATE DATABASE GamersTrade;

USE GamersTrade;

CREATE TABLE User(
    userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    verified BOOLEAN DEFAULT 0,
    registrationDate DATETIME NOT NULL
);

CREATE TABLE Profile(
    profileId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    zipCode INT NOT NULL,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE Listings(
    listingId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    gameId INT NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    console VARCHAR(255) NOT NULL,
    condition VARCHAR(255),
    additionalNotes VARCHAR(255),
    buyOrTrade ENUM('buy','trade'),
    sold BOOLEAN DEFAULT false,
    FOREIGN KEY (userId) REFERENCES User(userId)
);

CREATE TABLE Transaction (
    transactionId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    listingId INT NOT NULL,
    sellerId INT NOT NULL,
    buyerId INT NOT NULL,
    price INT NOT NULL,
    transactionDate DATETIME NOT NULL,
    FOREIGN KEY (listingId) REFERENCES Listings(listingId),
    FOREIGN KEY (sellerId) REFERENCES User(userId),
    FOREIGN KEY (buyerId) REFERENCES User(userId)
)