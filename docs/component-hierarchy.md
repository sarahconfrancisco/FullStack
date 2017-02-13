## Component Hierarchy

**HomeContainer**
 - Header
 - HomePage
 - Footer

**SessionFormContainer**
 - SessionForm
 - UserForm
 - ErrorComponentContainer

**RestaurantFormContainer**
 - RestaurantForm
 - ErrorComponentContainer

**SearchFormContainer**
 - SearchForm
 - ErrorComponentContainer
 - MapContainer
 - RestaurantIndexContainer

**RestaurantIndexContainer**
 - RestaurantIndex
 - RestaurantIndexItem

**RestaurantContainer**
 - RestaurantDetail
 - MapContainer
 - ReviewIndexContainer
 - ReviewFormContainer

**ReviewFormContainer**
 - ReviewForm
 - ErrorComponentContainer

**ReviewIndexContainer**
 - ReviewIndex
 - ReviewIndexItem

**MapContainer**
 - Map

**ErrorComponentContainer**
 - ErrorDetail

 ## Routes

 |Path   | Component   |
 |-------|-------------|
 | "/" | "HomeContainer"|
 | "/signup" | "SessionFormContainer" |
 | "/signin" | "SessionFormContainer" |
 | "/search"  | "SearchFormContainer"|
 | "/restaurants/:id" | "RestaurantContainer" |
 | "/restaurants/:id/review"| "ReviewFormContainer"|
 | "/newrestaurant" | "RestaurantContainer" |
