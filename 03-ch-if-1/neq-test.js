
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/03-ch-if-1/neq.js', [{
    inputs: ['BingoX'],
    outputs: ['Missed'],
    message: 'Your code does not output "Missed" when anything but "Bingo" is input'
  }, {
    inputs: ['Bingo'],
    outputs: ['Hit!'],
    message: 'Your code does not output "Hit!" when "Bingo" is input'  
  }                                                          
]);
