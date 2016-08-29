# PizzaWithStrangers

[Heroku Link](#)

## Minimum Viable Product

PizzaWithStrangers is a web application inspired by TeaWithStrangers built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:
- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Choose your current city
- [ ] Ability to host events
- [ ] Ability to join events
- [ ] Dashboard of joined/hosted events
- [ ] Production README

## Design Docs

- [View Wireframes](#)
- [React Components](https://github.com/smgoy/PizzaWithStrangers/blob/master/docs/component-heirarchy.md)
- [API Endpoints](https://github.com/smgoy/PizzaWithStrangers/blob/master/docs/api-endpoints.md)
- [DB Schema](https://github.com/smgoy/PizzaWithStrangers/blob/master/docs/schema.md)
- [Redux Structure](https://github.com/smgoy/PizzaWithStrangers/blob/master/docs/redux-structure.md)
- [Sample State](https://github.com/smgoy/PizzaWithStrangers/blob/master/docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication
- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] `User` signup/signin components
- [ ] Blank landing component after signup/signin
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1
### Phase 2: Cities and Events Model, API, and components (3 days)
**Objective:** Cities are listed and events in those cities can be created, read, edited and destroyed through the API.
Note model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for `CitiesController` and `EventsController`
- [ ] JBuilder views for `cities` and `events`
- [ ] Components for Redux loops
  - [ ] `EventIndex`
  - [ ] `EventDetail`
  - [ ] `EventForm`
  - [ ] `CityIndex`
  - [ ] `CityDetail`
- [ ] Style cities page and individual cities page
- [ ] Style individual event page
- [ ] Seed cities and events
### Phase 3: Profiles (2 days)
**Objective:** Users can create and update their profile. Users can view host and attendees profiles of events.
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for `ProfileController`
- [ ] JBuilder views for `profiles`
- [ ] Components for Redux loops
  - [ ] `ProfileIndex`
  - [ ] `ProfileForm`
- [ ] Style form page
- [ ] Style individual user information pages
- [ ] Seed users and profiles
### Phase 4: Events Dashboard and guest login (1 day)
- [ ] Create a guest login
- [ ] Seed guest to attend particular events
- [ ] Style dashboard so user has a convenient place where they can view all upcoming events
### Bonus Features (TBD)
- [ ] Face mash with pizza for profile pictures (find an API)
- [ ] Google map API integration for events
- [ ] Chat functionality
- [ ] Blog where people can share pizza themed pictures (infinite scroll)
