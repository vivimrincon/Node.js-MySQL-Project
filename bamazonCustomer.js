// Running this application will first display all of the items available for sale. 
// Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.
const mysql = require('mysql');
const keys = require('./config');
const inq = require('inquirer');
let columnify = require('columnify');

// Connection to server
const connection = mysql.createConnection({
    host: keys.HOST,
    port: keys.PORT,
    user: keys.USER,
    password: keys.PASSWORD,
    database: keys.DATABASE //all connections working
});
connection.connect((err)=>{
    if (err) throw err;
    wholeProductsTable();
    connection.end();
});

// selects from the whole table & displays it in the terminal
function wholeProductsTable(){
    connection.query("SELECT * FROM bamazon.products", (err, datatable)=>{
        if (err) throw err;
        console.log(columnify(datatable));
        // prompts questions.js
        let questions = require('./questions');
        inq.prompt(questions).then(answers => {
            console.log('\nOrder receipt:');
            console.log(JSON.stringify(answers, null, '  '));
        });
    });
};