{Check It!|assessment}(test-3417544426)

|||guidance
## Solution
```javascript
// Get our command line arguments
var age = +process.argv[2]

// Your code goes here
if (age >= 6 && age <= 11) {
  console.log('primary school')
}
else if (age >= 12 && age <= 18) {
  console.log('secondary school')
}
else {
  console.log('NA')
}
```
|||