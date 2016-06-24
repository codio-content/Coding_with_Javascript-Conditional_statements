You have used Boolean values before in Flode. To remind you, on the left is the Flode chart that you worked with previously.

In a Flode block, you could use either of the following:

```javascript
isCold = true
isCold = false
```

Look at the Flode chart on the left. You can see that the chart makes a decision based on the boolean variable shown above.

The decision condition is `isCold`? We could also write it like this and it would behave in exactly the same way:

```javascript
isCold = true
```

## Not
Now look at the second decision. The expression `!hasJumper` can be read as '**not** has a jumper'. 

Note the `!` character before `hasJumper`. This character means 'not'.

We could also have written it like this:

```javascript
hasJumper = false
```

...and the result would be the same. However, mixing up your `true` and `false` comparisons can be confusing. It is more readable to make all your comparisons `true` if possible.

## Play with the chart
Step through the chart. Feel free to experiment and change the values of `isCold` and `hasJumper` and follow the flow of execution to make sure you understand.

On the next pages are some challenges to reinforce your understanding of Boolean concepts.
