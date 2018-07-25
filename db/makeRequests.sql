insert into customers
(first_name, last_name, email, phone)
values($1,$2,$3,$4)
returning *