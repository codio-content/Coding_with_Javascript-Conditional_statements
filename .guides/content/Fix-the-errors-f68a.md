To run your code, press this button {Run}(node run-user.js ./03-ch-if-1/fix1.js)

{Check It!|assessment}(test-1180993407)

|||guidance
## Solution

- the if condition has `=` instead of `==`
- the second `output()` is wrongly written as `outputs()`

```javascript
input0 = 'hello'

if (input0 == 'there') {
  output(0)
}
else {
  output(1)
}
```
|||