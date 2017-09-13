var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//connection to SQL
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "lilbit1",
  database: "bamazonDB"
});

//create Table
var table = new Table({
  chars: {
    'top': '═',
    'top-mid': '╤',
    'top-left': '╔',
    'top-right': '╗',
    'bottom': '═',
    'bottom-mid': '╧',
    'bottom-left': '╚',
    'bottom-right': '╝',
    'left': '║',
    'left-mid': '╟',
    'mid': '─',
    'mid-mid': '┼',
    'right': '║',
    'right-mid': '╢',
    'middle': '│'
  }
});

console.log("Welcome to Bamazon");

// var quantity;
// var price;

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;

  table.push(
    ["ItemID", "Product", "Department", "Price"]
  );

  for (var i = 0; i < res.length; i++) {
    table.push(
      [res[i].itemid, res[i].product, res[i].department, res[i].price]
    );
    // userquant = res[i].quantity
  };
  console.log(table.toString());

  var clientView = function() {
    inquirer.prompt([{
      type: 'prompt',
      name: 'itemid',
      message: 'Please enter a product number:'
    }, {
      type: 'prompt',
      name: 'quantity',
      message: 'Please enter the quantity:'
    }]).then(function(input) {
      // console.log(input)

      var itemid = input.itemid;
      var itemQuantity = input.quantity

      var item = res.filter(function(item) {
        return item.itemid === Number(itemid)
      })[0]

      // console.log(item)

      if (item.quantity < itemQuantity) {
        console.log("Insufficient Quantity Available");
      } else {
        console.log(`Purchase of ${item.product} successful!`)
        console.log(`Total: ${itemQuantity * item.price}`);
        connection.query('UPDATE products SET ? WHERE ?', [{
              quantity: item.quantity - itemQuantity
            },
            {
              itemid: itemid
            }
          ],
          function(err, res) {
            if (err) {
              console.log('Failed to complete purchase')
            } else {
              console.log('Purchase complete!')
            }
          });

      }

    });
  }
  clientView();
});
