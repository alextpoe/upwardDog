# Schema Information

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
manager_id  | integer   | not null, foreign key (references users), indexed
Assignee_id | integer | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
completed   | boolean   | not null, default: false

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
manager_id  | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null


##posts (maybe)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
text        | string    | not null
employee_id | integer   | not null, foreign key (references users), indexed
task_id     | integer   | not null, foreign key (references tasks), indexed
(maybe a read receipt? Read | boolean | not null)


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
