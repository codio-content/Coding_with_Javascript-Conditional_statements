#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'eq.js'
run_js_test '100' 'Hit'
run_js_test '101' 'Miss'
end_js_test
