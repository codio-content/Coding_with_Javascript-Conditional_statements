
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/logical-ch/fast-cars2.js', [{
    inputs: [71, 0],
    outputs: ['1 fast car'],
    message: 'Your code does not output "1 fast car" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [0, 71],
    outputs: ['1 fast car'],
    message: 'Your code does not output "1 fast car" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [71, 71],
    outputs: ['2 fast cars'],
    message: 'Your code does not output "2 fast cars" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [70, 70],
    outputs: ['no fast cars'],
    message: 'Your code does not output "no fast cars" when the cars are not travelling more than 70.'  
  }                                                          
]);
