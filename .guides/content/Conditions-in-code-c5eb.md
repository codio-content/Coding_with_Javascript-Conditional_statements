Now let's see how that chart is written in Javascript, which you can see on the left.

{Run the code}(node 02-if1/if1.js)

Let's analyse how our code works.

First of all, we are setting the test data `20` for our input variable `input0`, just like we did in Flode.

```javascript
input0 = 20
```

And here comes the important bit. We are using an `if` statement to check whether `input0` is greater than 100. If it is, then we output the string 'Big'. Otherwise, we output the string 'Small'.

```javascript
if ( input0 > 100 ) {
  output ('Big')
}
else {
  output ('Small')
}
```

