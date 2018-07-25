update products
set
    product_name = $1,
    product_pic = $2,
    description = $3
where id = $4;

select * from products;