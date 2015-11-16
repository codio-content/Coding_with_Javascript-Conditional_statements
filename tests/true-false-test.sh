#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'true-false.js'
run_js_test 'true' '1'
run_js_test 'false' '0'
end_js_test
