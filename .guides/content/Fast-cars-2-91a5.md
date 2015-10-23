{Check It!|assessment}(test-393850037)

|||guidance
## Solution
```javascript
input0 = process.argv[2]
input1 = process.argv[3]

// Test for both fast cars
if (input0>70 && input1>70) {
  console.log('2 fast cars')
}
// Test for 1 or the other 
else if (input0>70 || input1>70) {
  console.log('1 fast car')
}
// So both must be 70 or less
else {
  console.log('no fast cars')
}
```
|||