You will hopefully remember our discussions about Boolean values in Flode. To refresh your memory, here is the same Flode chart on the left.

So in a Flode block, you could put either of the following

```javascript
isCold = true
isCold = false
```

Now look at the Flode chart on the left. Here you can see that we are making a decision based on this variable.

Notice how the decision condition is just `isCold`? We could also write it like this and it would behave exactly the same.

```javascript
isCold = true
```

## Not
Now look at the second decision. The expression `!hasJumper` can be read as '**not** has a jumper'. 

Note the `!` character before `hasJumper`. This character reads 'not'.

We could also have written it like this

```javascript
hasJumper = false
```

.. the result would be the same. However, mixing up your `true` and `false` comparisons can be confusing. It is more readable to make all your comparisons to `true` if possible.

## Play with the chart
Go ahead and step through the chart. Feel free to change the values of `isCold` and `hasJumper` and follow the flow of execution.

We will move on to a couple of challenges to reinforce the Boolean concepts.
