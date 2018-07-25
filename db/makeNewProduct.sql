insert into products
(product_name, product_pic, description)
values($1,$2,$3)
returning *;