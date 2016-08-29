# Schema Information
------

## users
------
| column name     | data type  | details                   |
| --------------- | ---------- | ------------------------- |
| id              | integer    | not null, primary key     |
| email           | string     | not null, indexed, unique |
| session token   | string     | not null, indexed, unique |
| password digest | string     | not null                  |

## events
------
| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| host_id      | integer    | not null, indexed     |
| lat          | float      | not null              |
| lng          | float      | not null              |
| city_id      | integer    | not null, indexed     |

## cities
------
| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| name         | string     | not null              |
| image        | string     | not null              |

## profiles
------
| column name  | data type  | details                |
| ------------ | ---------- | ---------------------- |
| id           | integer    | not null, primary key  |
| first name   | string     | not null               |
| last name    | string     | not null               |
| city         | string     | not null               |
| user_id      | integer    | not null, indexed      |
| description  | text       | not null               |
| pofile_image | string     | not null               |

## userevents
------
| column name  | data type  | details                   |
| ------------ | ---------- | ------------------------- |
| id           | integer    | not null, primary key     |
| user_id      | integer    | not null, indexed         |
| event_id     | integer    | not null, indexed         |
