== README

Welp is a full-stack web application to search for, rate, and review restaurants based off the website Yelp. It uses a PostgreSQL database, a Ruby on Rails MVC framework, React.js with a Redux architecture framework for rendered components and CSS3 for styling. [Click here][wwww.welpthatsdinner.com] for the live website.  

## Application Walkthrough

### Database
There are tables for users, restaurants, types (of food), a table to link restaurants and types; restaurant_types, and reviews. All were created using ActiveRecord and are stored in a Postgres database.

### Models
There are models for every table. Associations between models are established in ActiveRecord. Restaurants belong to users, reviews belong to a restaurant and a user, restaurant_types belong to a restaurant and a type. Most queries are done in ActiveRecord (finding the current user or all reviews for the current restaurant) but queries made by users are executed in pure SQL for speed.

### Controllers
The users and sessions controllers allow users to log in and log out. The reviews controller adds and edits reviews to the database, fetches all reviews for the current restaurant or the review corresponding to the current user and current restaurant. The restaurant controller can add new restaurants, find all the details for the restaurant corresponding to the id in the current url or query the Restaurant model for all restaurants that match a user search. All the controllers are children of the rails ActionController base.

### Views
A RESTful naming convention makes it easy for rails to know what controller method to go to based on the route and url verb and what view to render given the controller method. The controllers and views are nested under an API namespace. All views deconstruct model instances fetched by the controllers into JSON using jBuilder to match the frontend which is written in javascript. The current user is bootstrapped onto the window on the root page to allow users to remain logged in.

### Actions, Reducers and the Store
jQuery's ajax function is used to fetch JSON from different views. The returned promise dispatches the JSON and the action it executed (fetchRestaurants, addReview, etc) to the root reducer through Thunk middleware. Based on the action the root reducer assigns the data to a different section of the store's state. The state has six sections: currentUser, errors, loading, restaurant, reviews, and search.

### Components
Components are what the user sees on the page. The Header, Error, and Footer components are rendered on every page. Different components have access to different sections of state. The currentUser is available to the Session, RestaurantShow, Search, and ReviewForm components. The restaurant state section is available to the RestaurantShow component, the review state slice is available to the ReviewIndex and ReviewForm components, the search slice is available to the search component. These components also have children components. The application is a single page and uses React's hashHistory. What components are rendered to the page is determined by the route path after the # as assigned in root component.  

Users can:
  * Create an account
  * Log in and out
  * Search for restaurants by any combination of food types, location, features available
  * See a google map populated with restaurants searched for
  * See a restaurants details on a show page
  * rate and review restaurants


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
