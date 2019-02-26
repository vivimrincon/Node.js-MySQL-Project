DROP TABLE IF EXISTS bamazon;
USE bamazon;

CREATE TABLE products (
item_id TINYINT(50) NOT NULL PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity TINYINT(255) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Cat Food", "Pet Supplies", 32.21, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Dog Food", "Pet Supplies", 48.99, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Nintendo Switch Console", "Video Game Console", 300.99, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Playstation 4 Console", "Video Game Console", 400.99, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Nvidia GTX2080", "Graphics Card", 799.99, 5);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Nvidia GTX1070", "Graphics Card", 599.99, 75);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Oculus Rift Headset", "Virtual Reality", 349.90, 25);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "HTC VIVE Headset", "Virtual Reality", 498.90, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Super Mario Odyessy", "Nintendo Games", 60.00, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Mario Kart Deluxe", "Nintendo Games", 70.99, 100);