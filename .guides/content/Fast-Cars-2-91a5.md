{Check It!|assessment}(test-393850037)

|||guidance
## Solution
```javascript
// Get our car speeds from the command line
// Treat them as numbers
var speed1 = +process.argv[2]
var speed2 = +process.argv[3]

// Write your code below
if(speed1 > 70 && speed2 > 70){         // 2 fast cars test
  console.log('2 fast cars')
} else if (speed1 > 70 or speed2 > 70){ // 1 fast car test
  console.log('1 fast car')
} else {                                // must be 0
  console.log('no fast cars')
}
```
|||