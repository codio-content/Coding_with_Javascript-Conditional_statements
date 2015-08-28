
var vm = require('vm');
var fs = require('fs');

var data;

try {
  data = fs.readFileSync(process.argv[2], 'UTF-8');
}
catch(e) {
  console.log(e)
  procedd.exit(1)
}

var scope = {
  output: function(val) {
    console.log(val);
  },
  console: {
    log: console.log.bind(console)
  }
}

vm.runInNewContext(data, scope);
