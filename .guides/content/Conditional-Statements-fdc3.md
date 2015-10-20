This Unit covers the concept of conditional statements in Javascript.

Here's a good example.

```javascript
if (number >= 10 && number < 100 ) {  // 1. if number is 2 digits long
  output('2 digit number')            // then output text saying so
}
else if (number >= 100 ) {            // 2. otherwise, if more than 2 digits
  output('multi digit number')        // then output text saying so
}
else {                                // 3. otherwise 
  output('1 digit number')            // this must be a single digit number
}
```

> *If number is greater than or equal to 10 **and** number is less than 100, **then** output '2 digit number' **otherwise if** number is greater than or equal to 100 output 'multi digit number' **otherwise** output '1 digit number'*
