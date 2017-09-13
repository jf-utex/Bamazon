# Bamazon
An Amazon type CLI created with MySQL


This application utilizes **MySQL** and **Node.js**.  It requires the use of the npm packages:

* mysql
* inquirer
* cli-table

The file to run the application is **bamazonCustomer.js**.

A table containing "inventory" has been created using a MySQL Database.

Customer Interface:

This app provides a customer view of inventory available. The inventory data is displayed and will allow for selection of an item based on the unique identifier. 

A prompt will allow you, to select an item based on the ID number.  The program will check to see if the quantity available will allow the purchase of the intended item. If the quantity will allow, the purchase will be made and you will be notified that the purchase is complete with the total amount paid.  

The table will be updated with the new quantity available for purchase.
Below is a link to a You Tube video showing the app.

 [You Tube ](https://youtu.be/jatLDB2YUNg)
---------------------------------------------------------------------------------------

In the future, a managers view will expand the application by providing information regarding:

* View Products for Sale

* View Low Inventory

* Add to Inventory

* Add New Product


Under the Hood:

The Database was created with MySQL
A table inside of that database is called products.

The products in the table has the following columns:

* item_id (unique id for each product)

* product_name (Name of product)

* department_name

* price (cost to customer)

* stock_quantity (how much of the product is available in stores)


The initial database is populated with 17 different products. (i.e. "mock" data rows into this database and table).

There is a node application called **bamazonCustomer.js**. Running this application first displays all of the items available for sale. Included in the display are the ids, names, and prices of products for sale.

The app then prompts users with two messages.

The first asks for the ID of the product they would like to buy.

The second message asks how many units of the product they would like to buy.

Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

If not, the app should log a phrase like “Insufficient Quantity!”, and prevents the order from going through.

However, if your store does have enough of the product, the customer's order is fulfilled with an update the the SQL database to reflect the remaining quantity.

Once the update goes through, the customer is shown the total cost of their purchase.
