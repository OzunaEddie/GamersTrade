# GamersTrade


## Overview

GamersTrade is an application that allows users to buy, sell, or trade games and consoles from other users. Users of the platform have the ability to post the game(s) or console(s) they would like to sell, trade, or buy. If they wish, potential buyers or traders can privately communicate with the seller or traders to negotiate on the price or deal. To utilize this platform, the user must create an account to conduct any transaction.



## Getting Started
(___TODO__: These instructions will get you a copy of the project up and running on your local machine for development and testing purposes_)


## Requirements

(___TODO__: List out any technologies needed to run your project_)


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

(___TODO__: Draw out a site map that shows how pages are related to each other_)

Here's an [example](https://www.kauligmedia.com/media/1589/sitemap-01.jpg). Mostly looking for the names of pages and where they flow to.

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

(___TODO__: List any tutorials or material referenced that you've based your code off of_)

1. [React Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)

## Authors

1. Eddie Ozuna
2. Kevin Alvarez
3. Sandy Qiu
4. Moshe Oppenheim
