#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'neq.js'
run_js_test 'BingoX' 'Missed'
run_js_test 'Bingo' 'Hit!'
end_js_test
