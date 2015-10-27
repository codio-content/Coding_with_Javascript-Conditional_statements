
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/challenges/fast-cars1.js', [{
    inputs: [71, 0],
    outputs: ['fast cars'],
    message: 'Your code does not output "fast cars" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [0, 71],
    outputs: ['fast cars'],
    message: 'Your code does not output "fast cars" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [71, 71],
    outputs: ['fast cars'],
    message: 'Your code does not output "fast cars" when at least one of the cars is travelling more than 70'
  }, {
    inputs: [70, 70],
    outputs: ['ok'],
    message: 'Your code does not output "ok" when the cars are not travelling more than 70.'  
  }                                                          
]);
