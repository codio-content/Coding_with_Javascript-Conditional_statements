
var test = require('../test-fw.js');

test.tests('/home/codio/workspace/boolean-ch/bool-input.js', [{
    inputs: [true, true],
    outputs: ['cold and rainy'],
    message: 'Your code is not handling the case where it is cold and rainy'
  }, {
    inputs: [true, false],
    outputs: ['cold and dry'],
    message: 'Your code is not handling the case where it is cold and not rainy'
  }, {
    inputs: [false, true],
    outputs: ['warm and rainy'],
    message: 'Your code is not handling the case where it is not cold and rainy'
  }, {
    inputs: [false, false],
    outputs: ['warm and dry'],
    message: 'Your code is not handling the case where it is not cold and not rainy'
  }                                                          
]);
