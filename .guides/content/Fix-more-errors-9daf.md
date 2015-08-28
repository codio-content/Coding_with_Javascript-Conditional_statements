To run your code, press this button {Run}(node run-user.js ./03-ch-if-1/fix2.js)

{Check It!|assessment}(test-484914084)

|||guidance
## Solution

- on the `if` line, we have `input` instead of `input0`
- the `if` line is missing the opening `{`
- the `else` blocked is not closed with a `}`

```javascript
input0 = 'BingoX'

if (input0 != 'Bingo') {
  output( 'Missed' )
}
else {
  output ('Hit!')
}
```
|||