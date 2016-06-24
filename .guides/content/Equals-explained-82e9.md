Have a look at the Flode chart on the left. Below is the JavaScript code equivalent:

```javscript
if ( number == 100 ) {
  console.log( 'Is 100')
}
else {
  console.log( 'Is not 100' )
}
```

## Why do we use == ?
Notice that you need to use `==` and **not** =.

In JavaScript (and many other programming languages) `=` is the *assignment operator*, not a comparison operator. That means you use `==` to compare things and `=` to set variables.

```javascript
N = 100   // sets N to  100
N == 100  // false unless N has the value 100
```
