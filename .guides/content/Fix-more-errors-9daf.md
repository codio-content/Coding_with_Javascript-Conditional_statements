{Check It!|assessment}(test-484914084)

|||guidance
## Solution

- on the `if` line, we have `input` instead of `input0`
- the `if` line is missing the opening `{`
- the `else` blocked is not closed with a `}`

```javascript
input0 = process.argv[2]

if (input0 != 'Bingo') {
  output( 'Missed' )
}
else {
  output ('Hit!')
}
```
|||