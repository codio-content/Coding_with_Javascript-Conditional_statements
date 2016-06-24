On the left is the JavaScript code equivalent of the Flode chart from the previous page.

If you run the code you will see that it deals with the conditional statement in exactly the same way as the Flode chart did.

{Run the code}(node content/02-if1/if1.js 20)

Have a look at how this code works:

First of all, the test data for our input variable `number`, comes from the command line.

```javascript
var number = process.argv[2]
```

And here comes the important bit. An `if` statement is used to check whether `number` is greater than 100. If it is, then we output the string 'Big'. Otherwise, we output the string 'Small'.

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
