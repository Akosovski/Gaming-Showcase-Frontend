set timezone to 'Asia/Jakarta';
create sequence order_id_seq;

create table users (
	user_id integer,
	username varchar(100),
	password text,
	createdAt timestamptz,
	updatedAt timestamptz
);

alter table users add constraint pk_user_id primary key(user_id);

create table customer (
	customer_id integer,
	firstname varchar(100),
	lastname varchar(100),
	user_id integer,
	createdAt timestamptz,
	updatedAt timestamptz
);

alter table customer add constraint pk_customer_id primary key(customer_id);
alter table customer add constraint fk_user_id foreign key (user_id) 
references users(user_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table product_category (
	category_id integer,
	category_name varchar(100),
	description varchar(200),
	createdAt timestamptz,
	updatedAt timestamptz
);

alter table product_category add constraint pk_category_id primary key(category_id);

create table product (
	product_id integer,
	product_name varchar(100),
	description varchar(200),
	category_id integer,
	quantity integer,
	price numeric,
	image varchar(200),
	createdAt timestamptz,
	updatedAt timestamptz
);

alter table product add constraint pk_product_id primary key(product_id);
alter table product add constraint fk_category_id foreign key (category_id) 
references product_category(category_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table orders (
	order_id not NULL default nextval('order_id_seq'),
	user_id integer,
	totalproduct integer,
	totalprice numeric,
	createdAt timestamptz DEFAULT CURRENT_TIMESTAMP,
	updatedAt timestamptz DEFAULT CURRENT_TIMESTAMP
);

alter table orders add constraint pk_order_id primary key(order_id);
alter table orders add constraint fk_user_id foreign key (user_id) 
references users(user_id) ON DELETE CASCADE ON UPDATE CASCADE;

create table order_detail (
	order_detail_id integer,
	order_id integer,
	product_id integer,
	quantity integer,
	createdAt timestamptz,
	updatedAt timestamptz
);

alter table order_detail add constraint pk_order_detail_id primary key(order_detail_id);
alter table order_detail add constraint fk_order_id foreign key (order_id) 
references orders(order_id) ON DELETE CASCADE ON UPDATE CASCADE;
alter table order_detail add constraint fk_product_id foreign key (product_id) 
references product(product_id) ON DELETE CASCADE ON UPDATE CASCADE;

-- drop table users, customer, orders, product_category, product, order_detail;

insert into product_category (category_id, category_name, description, createdAt, updatedAt) values
(1, 'Minuman', 'Minuman untuk diminum.', current_timestamp, current_timestamp),
(2, 'Makanan', 'Makanan untuk dimakan.', current_timestamp, current_timestamp);

insert into product (product_id, product_name, description, category_id, quantity, price, createdAt, updatedAt) values 
(1, 'Coca-cola', 'Coca-cola untuk diminum', 1, 10, 12000, current_timestamp, current_timestamp),
(2, 'Fanta', 'Fanta untuk diminum', 1, 7000, 12, current_timestamp, current_timestamp),
(3, 'Sprite', 'Sprite untuk diminum', 1, 5, 6000, current_timestamp, current_timestamp),
(4, 'Aqua', 'Aqua untuk diminum', 1, 15, 3000, current_timestamp, current_timestamp),
(5, 'Fuji', 'Fuji untuk diminum', 1, 5, 20000, current_timestamp, current_timestamp),
(6, 'Nasgor', 'Nasi goreng untuk dimakan', 2, 8, 18000, current_timestamp, current_timestamp),
(7, 'Nasduk', 'Nasu uduk untuk dimakan', 2, 12, 13000, current_timestamp, current_timestamp),
(8, 'Dadar', 'Telor dadar untuk dimakan', 2, 10, 8000, current_timestamp, current_timestamp),
(9, 'Kerupuk', 'Kerupuk untuk dimakan', 2, 15, 2000, current_timestamp, current_timestamp),
(10, 'Acar', 'Acar untuk dimakan', 2, 10, 2000, current_timestamp, current_timestamp);

insert into users (user_id, username, password, createdAt, updatedAt) values 
(1, 'user1', '123', current_timestamp, current_timestamp),
(2, 'user2', '123', current_timestamp, current_timestamp),
(3, 'user3', '123', current_timestamp, current_timestamp);

insert into customer (customer_id, firstname, lastname, user_id, createdAt, updatedAt) values
(1, 'User', 'Kesatu', 1, current_timestamp, current_timestamp),
(2, 'User', 'Kedua', 2, current_timestamp, current_timestamp),
(3, 'User', 'Ketiga', 3, current_timestamp, current_timestamp);

select * from orders;
select * from order_detail;
delete from orders;
delete from order_detail;