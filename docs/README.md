# WelpThatsDinner

[Trello link][trello]

[trello]: https://trello.com/b/Vz8gFczW/welp

## Minimum Viable Product

WelpThatsDinner is a web application inspired by Yelp built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Restaurant Page
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Search/Filters
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Reviews/Ratings
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature
- [ ] Map
  - [ ] Adequate styling
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate and appropriate seeds to demonstrate the feature

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Create Users and Sessions Backend and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Create Restaurant Backend and Front-end Show Pages (1.5 days)
**Objective** Be able to view a restaurant's show page

### Phase 3: Create Reviews Backend and Review Form (1.5 day)
**Objective** Allow users to create reviews and show those reviews on the corresponding restaurant pages

## Phase 4: Implement Searching (1.5 days)
**Objective** Allow users to search for restaurants using types and features

## Phase 5: Implement Google Maps (1 day)
**Objective** Render a map showing either all the near by restaurants matching a search result or where a restaurant is on its show page.

## Phase 6: Support Searching by distance radii (.5 days)
**Objective** Allow a user to search for restaurants within a radii of their current location

## Bonus Features (TBD):
- [ ] Mark Reviews as helpful or unhelpful
  **Objective** Allow Reviews to be marked as helpful/unhelpful by users and change display logic to display the most helpful reviews first and then by most recent.
- [ ] Users Show Page
- [ ] Follows
