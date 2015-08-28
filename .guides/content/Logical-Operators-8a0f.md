Take a look at the Flode chart on the left. This contains 2 conditional blocks where you can see `and` and `or` being used.

Below is the equivalent Javascript code. Try different values for `number`.

```javascript
number = -10

if (number >= 10 && number < 100 ) {
  output('2 digit number')
}
else {
  output('1 digit number')
}

if ( number < 0 || number >= 1000 ) {
  output('Invalid number')
}
else {
  output('OK')
}
```

## && and ||
The one new thing here is that when using logical operators in Javascript, you cannot write 'and' and 'or'. You have to use '&&' and '||'.

Other than this, the `if / else` follows exactly the same principles.
