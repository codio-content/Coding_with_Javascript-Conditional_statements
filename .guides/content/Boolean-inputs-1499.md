{Check It!|assessment}(test-2697509729)

|||guidance
## Solution
```javascript

// Get input from the command line
var isCold  = process.argv[2]
var isRainy = process.argv[3]

// Your code goes here
isCold= (isCold == 'true')
isRainy= (isRainy == 'true')


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