#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'fix1.js'
run_js_test 'there' '0'
run_js_test 'anything but' '1'
end_js_test
