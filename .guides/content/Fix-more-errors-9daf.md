{Check It!|assessment}(test-484914084)

|||guidance
## Solution

- on the `if` line, we have `input` instead of `input0`
- the `if` line is missing the opening `{`
- the `else` blocked is not closed with a `}`

```javascript
var text = process.argv[2]

if (text != 'Bingo') {
  console.log( 'Missed' )
}
else {
  console.log('Hit!')
}
```
|||