Take a look at the Flode chart on the left. This contains 2 conditional blocks where you can see `and` and `or` being used.

Below is the equivalent JavaScript code. Try different values for `number`.

```javascript
// Change the value of number and step through
var number = -10  

// example of 'and'
if (number >= 10 && number < 100 ) {  
  console.log('2 digit number')
}
else {
  console.log('1 digit number')
}

// example of 'or'
if ( number < 0 || number >= 1000 ) { 
  console.log('Invalid number')
}
else {
  console.log('OK')
}
```

## && and ||
The one new thing here is that when using logical operators in JavaScript, you cannot write 'and' and 'or'. You have to use '&&' and '||'.

Other than this, the `if / else` follows exactly the same principles.
