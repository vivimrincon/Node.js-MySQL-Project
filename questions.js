console.log('\nHello, welcome to Bamazon!\n');

function genQuestions(params) {
    let questions = [
        {
            type: 'list',
            name: 'itemPicking',
            message: 'What department would you like to purchase from?',
            choices: params,
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
    return questions;
}
module.exports = genQuestions;