#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test '1-0.js'
run_js_test '1' 'On'
run_js_test '0' 'Off'
end_js_test
