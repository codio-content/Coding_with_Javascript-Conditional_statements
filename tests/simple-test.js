
var test = require('/home/codio/workspace/test-fw.js');

test.tests('/home/codio/workspace/challenges/simple.js', [{
    inputs: [100],
    outputs: [true],
    message: 'Your code does not output a boolean value of "true" when a number greater than or equal to 100 is input'
  }, {
    inputs: [101],
    outputs: [true],
    message: 'Your code does not output a boolean value of "true" when a number greater than or equal to 100 is input'
  }, {
    inputs: [99],
    outputs: [false],
    message: 'Your code does not output a boolean value of "false" when a number less than 100 is input'
  }                                                         
]);
