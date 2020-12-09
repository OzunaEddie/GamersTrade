# GamersTrade


## Overview

GamersTrade is an application that allows users to buy, sell, or trade games and consoles from other users. Users of the platform have the ability to post the game(s) or console(s) they would like to sell, trade, or buy. If they wish, potential buyers or traders can privately communicate with the seller or traders to negotiate on the price or deal. To utilize this platform, the user must create an account to conduct any transaction.



## Getting Started
In the project directory(client), you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**More information can be found in the .readme files located in the following client and server directories**

## Requirements

1. [Python 3](https://www.python.org/downloads/)
2. [MySQL](https://www.mysql.com/downloads/)

## Data Model

(___TODO__: A description of your application's data and their relationships to each other_)

The application will store user, items, and orders.

- Users can have many orders.
- Orders can have many items.

(___TODO__: Sample resources_)

An Example `User`:

```javascript
{
  id: 5,
  firstName: "Mary",
  lastName: "Jane"
}
```

An Example `Item`:

```javascript
{
  id: 3,
  name: "Lamp",
  price: "$19.99"
}
```

An Example `Order`:

```javascript
{
  id: 1,
  user_id: 5,// a reference to a User object
}
```

An Example `OrderItems`:

```javascript
{
  item_id: 3,
  order_id: 1 // References an Order object
}
```

## Site map

<img src='Site_Map.png' title='Site Map for GamersTrade' width='500' height='400' alt='' />

## User Stories or Use Cases

1. As a user, I want to be able to negotiate prices with other sellers. 
2. As a user, I want to be able to search for items based on my interests.
3. As a user, I want to be able to register and log in.
4. As a user, I want to be able to sell my items to other users.
5. As a user, I want to be able to trade games with other users.
6. As a user, I want to communicate with sellers and traders privately.
7. As a user, I want to be able to post the games I want to sell.
8. As a user, I want to be able to post the games I want to trade.
9. As a user, I want to be able to buy items from other users. 

## References Used

1. [React Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)
2. [Eddie's Project From Other Course](https://github.com/The-Sciences-and-Engineering-Squad/Marketext)

## Authors

Eddie Ozuna\
Kevin Alvarez\
Sandy Qiu\
Moshe Oppenheim
