The 'equals' condition is a little strange in Javascript.

Take a look at the Flode chart on the left. Below is the Javascript code.

```javscript
if ( input0 == 100 ) {
  output( 'Is 100')
}
else {
  output( 'Is not 100' )
}
```

## Why ==
The key thing to notice here is that you need to use `==` and **not* =.

Below is the explanation of why you need to use `==`. For now, just remember that in %99.999 of cases, you should always use `==`.

The reason for this is that `=` is a so-called *assignment operator*. This means it would set `input0` to be 100 and would then result in the condition being true, regardless of what the value of `100` was beforehand.