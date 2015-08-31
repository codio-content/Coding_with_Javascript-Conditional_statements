
var test = require('../test-fw.js');

var script = '/home/codio/workspace/03-ch-if-1/true-false.js';

test.test(script, ['true'], function(out, err) {

  if(err) {
    console.log(err)
    process.exit(1)      
  }
  
  if(out.length == 0) {
    console.log('There were no outputs from your code!')
    process.exit(1)  
  }
  
//   console.log(out)

  if(out[0] == 1) {
    test.test(script, ['false'], function(out, err) {
//       console.log(out)

      if(out.length == 0) {
        console.log('There were no outputs from your code!')
        process.exit(1)  
      }

      if(out[0] == 0) {
        console.log('Well done!');
        process.exit()             
      }
      else {
        console.log('Not quite right please try again.');
        process.exit(1)    
      }      

    });
  }
  else {
    console.log('Not quite right please try again.');
    process.exit(1)    
  }
   
});
