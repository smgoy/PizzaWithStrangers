# Schema Information

## users

| column name     | data type  | details                   |
| --------------- | ---------- | ------------------------- |
| id              | integer    | not null, primary key     |
| email           | string     | not null, indexed, unique |
| session_token   | string     | not null, indexed, unique |
| password_digest | string     | not null                  |
| f_name          | string     | not null                  |
| l_name          | string     |                           |
| city            | string     | not null                  |
| description     | text       |                           |
| pofile_image    | string     |                           |
| host            | boolean    | not null                  |

## events

| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| host_id      | integer    | not null, indexed     |
| city_id      | integer    | not null, indexed     |
| group_id     | integer    | not null, indexed     |
| date         | datetime   | not null              |
| address      | string     | not null              |
| time         | datetime   | not null              |
| image        | string     |                       |
| seats        | integer    | not null              |

## groups

| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| user_id      | integer    | not null, indexed     |
| name         | string     | not null              |

## groupcities

| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| group_id     | integer    | not null, indexed     |
| city_id      | string     | not null, indexed     |

## groupusers

| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| group_id     | integer    | not null, indexed     |
| user_id      | string     | not null, indexed     |

## cities

| column name  | data type  | details               |
| ------------ | ---------- | --------------------- |
| id           | integer    | not null, primary key |
| name         | string     | not null              |
| image        | string     | not null              |

## userevents

| column name  | data type  | details                   |
| ------------ | ---------- | ------------------------- |
| id           | integer    | not null, primary key     |
| user_id      | integer    | not null, indexed         |
| event_id     | integer    | not null, indexed         |
