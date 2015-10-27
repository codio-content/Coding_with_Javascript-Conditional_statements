
var test = require('/home/codio/workspace/test-fw.js');

test.tests('/home/codio/workspace/challenges/categories.js', [{
    inputs: [6],
    outputs: ['primary school'],
    message: 'Your code is not detecting the "primary school" category correctly'
  }, {
    inputs: [11],
    outputs: ['primary school'],
    message: 'Your code is not detecting the "primary school" category correctly'
  }, {
    inputs: [12],
    outputs: ['secondary school'],
    message: 'Your code is not detecting the "secondary school" category correctly'
  }, {
    inputs: [18],
    outputs: ['secondary school'],
    message: 'Your code is not detecting the "secondary school" category correctly'
  }, {
    inputs: [5],
    outputs: ['NA'],
    message: 'Your code is not detecting "NA" values'
  }, {
    inputs: [19],
    outputs: ['NA'],
    message: 'Your code is not detecting "NA" values'
  }
]);


var script = '/home/codio/workspace/challenges/categories.js';

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
