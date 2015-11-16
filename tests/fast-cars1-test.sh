#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'fast-cars1.js'
run_js_test '71 0' 'fast cars'
run_js_test '0 71' 'fast cars'
run_js_test '71 71' 'fast cars'
run_js_test '70 70' 'ok'
end_js_test
