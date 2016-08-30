# Component Heirarchy

### AuthFormContainer
- AuthForm

### HomeContainer
- Home
- Navbar

### CitiesContainer
- CityIndex
- CityDetail

### CityDetail
- EventIndex
- GroupIndex

### GroupsContainer
- GroupIndex
- GroupDetail

### EventsContainer
- EventIndex
- EventDetail

### GroupDetail
- ProfileIndex

### EventDetail
- ProfileIndex

### ProfileContainer
- ProfileIndex
- ProfileForm

### NewEventContainer
- EventForm

### NewGroupContainer
- GroupForm

# Routes

| path                          | component           |
| ----------------------------- | ------------------- |
| "/sign-in"                    | AuthFormContainer   |
| "/sign-up"                    | AuthFormContainer   |
| "/home"                       | HomeContainer       |
| "/cities"                     | CitiesContainer     |
| "/cities/:id"                 | CityDetail          |
| "/cities/:city_id/groups/:id" | GroupDetail         |
| "/cities/:city_id/events/:id" | EventDetail         |
| "/users/:id"                  | ProfileIndex        |
| "/new-event                   | EventForm           |
| "/new-group                   | GroupForm           |
