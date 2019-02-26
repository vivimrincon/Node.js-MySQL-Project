console.log('\nHello, welcome to Bamazon!\n');

let questions = [
    {
        type: 'list',
        name: 'itemPicking',
        message: 'What department would you like to purchase from?',
        choices: ['Pet Supplies','Video Game Console', 'Graphics Card', 'Virtual Reality', 'Nintendo Games'],
        filter: function(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'productPick',
        message:'Please write the name of the product.',
    
    },
    {
        type: 'input',
        name: 'buyQuantity',
        message: 'How many do you want to purchase?',
        validate: function(value) {
            let valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number amount.';
        }
    }
];
module.exports = questions;