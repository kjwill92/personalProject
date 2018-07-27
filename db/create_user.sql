insert into users (auth_id, user_name)
values ($1,$2)
returning *;