# API Endpoints

## HTML API

### Root

- `GET /`
  - load the app

## JSON API

### Users

- `POST /api/user`
 - sign up, accepts all info in the users table. returns a currentUser or error message.

### Session

- `POST /api/session`
 - sign in, accepts email and password. returns a currentUser or error message.
- `DELETE /api/session`
 - sign out

### Reviews
 - `POST api/restaurants/id/review`
  - post a new review. accepts all the params that go in the restaurant and types tables

### Restaurants
 - `POST api/restaurant`
  - post a new restaurant. accepts all info in the restaurants table
 - `GET api/restaurants/id`
  - get a restaurant's details along with all reviews of that restaurant
 - `GET api/restaurants`
  - accepts types, features, and/or zip params, returns an object of restaurant objects
