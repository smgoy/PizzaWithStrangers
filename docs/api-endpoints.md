# API Endpoints

## HTML API

### Root
- `GET /`

##JSON API

### Users
- `POST /api/users`
- `PATCH /api/users`

### Sessions
- `GET /api/session`
- `PATCH /api/session`
- `DELETE /api/session`

### Cities
- `GET /api/cities`
- `GET /api/cities/:id`

### Events
- `GET /api/cities/:city_id/events`
- `GET /api/cities/:city_id/events/:id`
- `POST /api/events`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Groups
- `GET /api/cities/:city_id/groups`
- `GET /api/cities/:city_id/groups/:id`
- `POST /api/groups`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Profiles
- `GET /api/profiles/:id`
- `POST /api/users/:id/profiles`
- `PATCH /api/profiles/:id`
