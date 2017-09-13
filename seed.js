CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE "products" (
'itemid' INT NOT NULL AUTO_INCREMENT,
"product" VARCHAR(50) NULL,
"department" VARCHAR (30) NULL,
"price" DECIMAL (10,2) NULL,
"quantity" INT  NULL,
PRIMARY KEY ("itemid")

);

NSERT INTO table VALUES
        (list of values);


INSERT INTO products (product, department, price, quantity) VALUES ('Apples', 'Produce', .45, 30)
('Bread', 'Bakery', 1.45, 20), ('Dog Food', 'Pets', 45.00, 10), ('Milk', 'Dairy', 3.15, 15),
('Broccoli', 'Produce', .50, 30), ('Frozen Peas', 'Frozen', .90, 30), ('Toilet Paper', 'Paper Goods', .4.50, 1),
('Chocolate Chips', 'Baking', 2.15, 25),('Cream Cheese', 'Dairy', 1.00, 2), ('Yogurt', 'Dairy', .35, 30),
('Shredded Wheat', 'Cereal', 3.00, 10),('Meat Balls', 'Meat', 4.15, 30),
('Cheese', 'Dairy', 3.20, 17), ('Penne', 'Pasta', .50, 12), ('Corn Meal', 'Dry Goods', 1.15, 4),
('Marshmallows', 'Baking', 1.15, 45);
