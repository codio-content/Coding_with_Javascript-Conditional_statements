This is very important, so please read it carefully.

## Indenting your code
In some languaes like Python, indentation is *required*. If you don't indent you code properly, it will not run.

In Javascript, your code will run fine without indentation but it will look messy if you don't.

See how this is less readable?

```javascript
if ( input0 > 100 ) {
output ('Big')
}
else {
output ('Small')
}
```

## What code should you indent?
You should indent all code within a code block. Code blocks start with the '{' character and end with the '}'.

```javascript
if ( input0 > 100 ) {
  code here
  and here
  and here
  all indented
}
```

You will see other statements soon that also have code blocks, such as the `for` and `while` loops. The same applies here.

```javascript
while ( counter <= 9) {
  console.log(counter)
  counter = counter + 1
}
```

## Tab key
One thing that beginners do when indenting their code is to press the space bar several times. **Don't do this**.

Use the tab key instead. This ensures that indentations are consistent.

In Javascript, it does not really matter by how much you indent as long as you indent.

