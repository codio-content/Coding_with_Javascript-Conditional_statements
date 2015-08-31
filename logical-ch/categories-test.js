
var test = require('../test-fw.js');

var script = '/home/codio/workspace/logical-ch/categories.js';

test.test(script, [6], function(out, err) {

  if(err) {
    console.log(err)
    process.exit(1)      
  }
  
  if(out.length == 0) {
    console.log('There were no outputs from your code!')
    process.exit(1)  
  }
  
//   console.log(out)

  if(out[0] == 'primary school') {

    test.test(script, [12], function(out, err) {
      if(out.length != 0 && out[0] == 'secondary school') {
    
        test.test(script, [19], function(out, err) {
    //       console.log(out)

          if(out.length == 0) {
            console.log('There were no outputs from your code!')
            process.exit(1)  
          }

          if(out[0] == 'NA') {
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
  }
  else {
    console.log('Not quite right please try again.');
    process.exit(1)    
  }
   
});
