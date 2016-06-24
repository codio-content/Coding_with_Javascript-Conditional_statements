Indentation means leaving an empty space between the left margin and the beginning of a line of code. In some programming languages like Python, indentation is *required*. In these languages, if you do not indent your code properly, it will not run.

In JavaScript, your code will run fine without indentation but it will look messy and can be hard for others to read and understand.

Have a look at the code below which is written without indentations. It is hard to read compared with the code we have used on the previous pages.

```javascript
if ( number > 100 ) {
console.log ('Big')
}
else {
console.log ('Small')
}
```

## What code should you indent?
You should indent all code within a code block. Code blocks start with the `{` character and end with the `}`.

```javascript
if ( number > 100 ) {
  code here
  and here
  and here
  all indented
}
```

You will see other statements soon that also have code blocks, such as `for` and `while` loops. These should be indented too.

```javascript
while ( counter <= 9) {
  console.log(counter)
  counter = counter + 1
}
```

## How do you indent code?
Press the tab key at the beginning of a new line to indent your code. (The tab key is the key with two arrows pointing in opposite directions).

Sometimes beginners press the space bar several times to indent their code. **Don't do this**.

Always use the tab key instead. This ensures that indentations are consistent.

In JavaScript, use either 2 or 4 spaces for indenting.
