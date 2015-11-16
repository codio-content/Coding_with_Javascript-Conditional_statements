#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'simple.js'
run_js_test '100' 'true'
run_js_test '101' 'true'
run_js_test '99' 'false'
end_js_test