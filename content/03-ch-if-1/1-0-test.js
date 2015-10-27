
var test = require('/home/codio/workspace/test-fw.js');

test.tests('/home/codio/workspace/content/03-ch-if-1/1-0.js', [{
    inputs: [1],
    outputs: ['On'],
    message: 'Your code does not output "On" when 1 is input'
  }, {
    inputs: [0],
    outputs: ['Off'],
    message: 'Your code does not output "Off" when anything but 1 is input'  
  }                                                          
]);
