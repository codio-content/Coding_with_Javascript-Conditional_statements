
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/content/03-ch-if-1/true-false.js', [{
    inputs: ['true'],
    outputs: [1],
    message: 'Your code does not output "1" when true is input'
  }, {
    inputs: ['false'],
    outputs: [0],
    message: 'Your code does not output "0" when anything but true is input'  
  }                                                          
]);
