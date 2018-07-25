delete from orders
where id = $1;

delete from customers
where id = $2;

select * from customers
join orders on customers.id = orders.customer_id;