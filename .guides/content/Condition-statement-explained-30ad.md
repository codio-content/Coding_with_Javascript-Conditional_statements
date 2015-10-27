Now let's analyse how the `if` statement works. Here's the full code again.

```javascript
if ( number > 100 ) {
  console.log ('Big')
}
else {
  console.log ('Small')
}
```

Let's start with the first line.

## The if statement
```javascript
if ( number > 100 ) {
```

1. You start your line with `if`.
1. You then specify the condition inside the parentheses `( condition )`. 
1. Finally, at the end of the line you add a `{`, known as a **curly bracket**. 

## If the condition is true
**If** this condition is true, then you execute all the instructions that come after it, within the `{` `}`. There is only one instruction in this example.

```javascript
  console.log ('Big')
```

Everything between `{` and `}` is called a *code block*.

## Otherwise
If the condition is **not true**, then `else` code block, so only this would execute.

```javascript
  console.log ('Small')
```

## Code blocks
The `{` at the end of the `if` line denotes the start of a code block. As explained above, you can then add any number of instructions on the following lines before the end of the code block is arrived at, denoted by the `}`.


