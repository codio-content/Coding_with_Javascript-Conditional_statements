Take a look at the Flode chart on the left. Below is the Javascript code.

```javscript
if ( number == 100 ) {
  console.log( 'Is 100')
}
else {
  console.log( 'Is not 100' )
}
```

## Why ==
Notice that you need to use `==` and **not* =.

In JavaScript (and many other programming languages) `=` is the *assignment operator*, not a comparison operator. Use `==` to compare things and `=` to set variables.

```javascript
N = 100   // sets N to  100
N == 100  // false unless N has the value 100
```