
var test = require('/home/codio/workspace/test-fw.js');

test.tests('/home/codio/workspace/content/03-ch-if-1/fix1.js', [{
    inputs: ['there'],
    outputs: [0],
    message: 'Your code does not output "0" when "there" is input'
  }, {
    inputs: ['anything but'],
    outputs: [1],
    message: 'Your code does not output "1" when anything but "there" is input'  
  }                                                          
]);
