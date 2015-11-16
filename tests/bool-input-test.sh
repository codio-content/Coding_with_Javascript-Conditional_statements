#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'bool-input.js'
run_js_test 'true true' 'cold and rainy'
run_js_test 'true false' 'cold and dry'
run_js_test 'false true' 'warm and rainy'
run_js_test 'false false' 'warm and dry'
end_js_test