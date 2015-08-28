
var vm = require('vm');
var fs = require('fs');

var test = {
  test: function(file, argv, cb) {
    var data = fs.readFileSync(file);
    var input = [];
    var output = [];

    var scope = {
      output: function(val) {
        output.push(val);
      }
    }

    for (var i = 0; i < argv.length; i++) {
      input.push({ i: 0, val: argv[i]});
      
      (function(n) {
        Object.defineProperty(scope, 'input' + n, {
          get: function() {
            return input[n].val
          },
          set: function(val) {
            if(input[n].i++ > 0) {
              input[n].val = val
            }
          }
        });
      })(i);

    }

    try {
      vm.runInNewContext(data, scope)

      if(typeof cb == 'function') {
        cb(output, null);
      }
    }
    catch(e) {
      if(typeof cb == 'function') {
        
        var jshint = require('./jshint');
        
        console.log(e.message)        
        cb(null, e.message);
      }      
    }

    return output;
  }

}

module.exports = test;
