# Component Heirarchy

### AuthFormContainer
- AuthForm

### HomeContainer
- Home
- Navbar

### CitiesContainer
- CityIndex

### CityIndex
- HostIndex

### HostContainer
- HostDetail

### NewHostContainer
- NewHost

### EventsContainer
- EventIndex

### EventIndex
- EventDetail

### NewEventContainer
- NewEvent

# Routes

| path                      | component           |
| ------------------------- | ------------------- |
| "/sign-in"                | AuthFormContainer   |
| "/sign-up"                | AuthFormContainer   |
| "/home"                   | HomeContainer       |
| "/cities"                 | CitiesContainer     |
| "/cities/:id"             | CityIndex           |
| "/host/:id"               | HostContainer       |
| "/new-host"               | NewHostContainer    |
| "/cities/:cityId/events"  | EventsContainer     |
| "/events/:id"             | EventIndex          |
| "/new-event               | NewEvent            |
