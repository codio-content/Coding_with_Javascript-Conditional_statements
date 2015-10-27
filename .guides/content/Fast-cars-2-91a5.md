{Check It!|assessment}(test-393850037)

|||guidance
## Solution
```javascript
var car1 = process.argv[2]
var car2 = process.argv[3]

// Test for both fast cars
if (car1 > 70 && car2 > 70) {
  console.log('2 fast cars')
}
// Test for 1 or the other 
else if (car1 > 70 || car2 > 70) {
  console.log('1 fast car')
}
// So both must be 70 or less
else {
  console.log('no fast cars')
}
```
|||