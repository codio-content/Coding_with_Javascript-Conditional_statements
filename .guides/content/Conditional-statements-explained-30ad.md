Now we are going to look in more detail at how the `if` statement works. Here is the full code again:

```javascript
if ( number > 100 ) {
  console.log ('Big')
}
else {
  console.log ('Small')
}
```

First, have a look at the first line:

## The if statement
```javascript
if ( number > 100 ) {
```

1. Start the line with `if`.
1. Now specify the condition inside the brackets `(condition)`. 
1. Finally, at the end of the line you add a `{`, known as a **curly bracket**. 

## If the condition is true
**If** the condition is true, then you carry out all the instructions that come after it, within the `{` `}`. In this example there is only one instruction.

```javascript
  console.log ('Big')
```

Everything between `{` and `}` is called a *code block*.

## Otherwise
If the condition is **not true**, the `else` code block executes instead.

```javascript
  console.log ('Small')
```

## Code blocks
The `{` at the end of the `if` line is used to start a code block. Once the code block has been started, you add the code you want to execute on the following lines. You then finish the code block with a `}`.



