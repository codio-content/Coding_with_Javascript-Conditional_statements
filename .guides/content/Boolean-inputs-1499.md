{Check It!|assessment}(test-2697509729)

|||guidance
## Solution
```javascript
input0 = process.argv[2]
input1 = process.argv[3]

// Assign inputs to nicer names 
// to make the code below more readable
var isCold = input0
var isRainy = input1

if ( isCold ) {
  if ( isRainy ) {
    console.log('cold and rainy')
  }
  else {
    console.log('cold and dry')
  }
}
else {
  if ( isRainy ) {
    console.log('warm and rainy')
  }
  else {
    console.log('warm and dry')
  }
}

```
|||