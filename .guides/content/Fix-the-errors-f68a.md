{Check It!|assessment}(test-1180993407)

|||guidance
## Solution

- on the `if` line, we have `=` when we should have `==`
- we are returning `1` when we are passed `there` and it should be `0`
- the `else` blocked is not closed with a `}`

```javascript
// Get command line arguments
input0 = process.argv[2]

// Your code goes here
if (input0 == 'there') {
  console.log(0)
}
else {
  console.log(1)
}
```
|||
