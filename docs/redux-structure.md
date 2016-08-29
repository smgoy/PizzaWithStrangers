# Redux Structure

## Auth Cycles

### Session API Request Action
- `signUp`
  * invoked from `SignupForm` `onSubmit`
  * `POST /api/users` is called
  * `receiveCurrentUser` is set as the success callback
- `logIn`
  * invoked from `LoginForm` `onSubmit`
  * `POST /api/session` is called
  * `receiveCurrentUser` is set as the callback
- `logOut`
  * invoked from `Navbar` `onClick`
  * `DELETE /api/session` is called
  * `removeCurrentUser` is set as the success callback
- `fetchCurrentUser`
  * invoked from App in `didMount`
  * `GET /api/session` is called
  * `receiveCurrentUser` is set as the success callback

### Session API Response Action
- `receiveCurrentUser`
  * invoked from an API callback
  * the `SessionReducer` stores currentUser in the application's state
- `removeCurrentUser`
  * invoked from an API callback
  * the `SessionReducer` removes currentUser from the application's state

## Error Cycles

### Error API Response Action
- `setErrors`
  * invoked from API callbacks on error for actions that generate `POST` requests
  * the `ErrorReducer` stores the form in the application's state; errors are mapped to their respective forms
- `removeErrors`
  * invoked from API callbacks on success for actions that generate `POST` requests
  * the `ErrorReducer` removes errors for a given form in the application's state

## Events Cycles

### Events API Request Action
- `fetchAllEvents`
  * invoked `onEnter` to `/cities/:id`
  * `GET api/events` is called
  * `receiveAllEvents` is sent as the success callback
- `createEvent`
