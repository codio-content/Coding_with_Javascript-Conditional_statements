#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'fast-cars2.js'
run_js_test '71 0' '1 fast car'
run_js_test '0 71' '1 fast car'
run_js_test '71 71' '2 fast cars'
run_js_test '70 70' 'no fast cars'
end_js_test
