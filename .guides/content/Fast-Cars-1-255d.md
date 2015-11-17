{Check It!|assessment}(test-2039942507)

|||guidance
## Solution
```javascript
// Get input from the command line
// Make sure they are treated as numbers
var car1 = +process.argv[2]
var car2 = +process.argv[3]

// Your code goes here

if (car1 > 70 || car2 > 70) {
  console.log('fast cars')
}
else {
  console.log('ok')
}
```
|||