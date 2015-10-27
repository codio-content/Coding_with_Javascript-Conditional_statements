
var test = require('/home/codio/workspace/test-fw.js');

test.tests('/home/codio/workspace/content/03-ch-if-1/eq.js', [{
    inputs: [100],
    outputs: ['Hit'],
    message: 'Your code does not output "Hit" when 100 is input'
  }, {
    inputs: [101],
    outputs: ['Miss'],
    message: 'Your code does not output "Miss" when anything but 100 is input'  
  }                                                          
]);
