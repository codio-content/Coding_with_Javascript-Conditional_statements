#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'categories.js'
run_js_test '6' 'primary school'
run_js_test '11' 'primary school'
run_js_test '12' 'secondary school'
run_js_test '18' 'secondary school'
run_js_test '5' 'NA'
run_js_test '19' 'NA'
end_js_test
