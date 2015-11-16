Now let's see how that chart is written in JavaScript, which you can see on the left.

{Run the code}(node content/02-if1/if1.js 20)

Let's analyse how our code works.

First of all, we are getting the test data for our input variable `number`, from the command line.

```javascript
var number = process.argv[2]
```

And here comes the important bit. We are using an `if` statement to check whether `number` is greater than 100. If it is, then we output the string 'Big'. Otherwise, we output the string 'Small'.

```javascript
if ( number > 100 ) {
  console.log ('Big')
}
else {
  console.log ('Small')
}
```

## Reminder

![](.guides/img/simple-if.png
)
