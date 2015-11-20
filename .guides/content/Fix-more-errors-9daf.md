{Check It!|assessment}(test-484914084)

|||guidance
## Solution

- on the `if` line, we have `texts` instead of `text`
- the `if` line is missing the opening `{`
- the `else` block is not closed with a `}`

```javascript

// Get input from the command line
var text = process.argv[2]

if (text != 'Bingo') {
  console.log( 'Missed' )
}
else {
  console.log('Hit!')
}
```
|||