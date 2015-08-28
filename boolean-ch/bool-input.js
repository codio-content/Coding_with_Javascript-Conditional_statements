input0 = false
input1 = true

// Asign inputs to nicer names 
// to make the code below more readable
isCold = input0
isRainy = input1

if ( isCold ) {
  if ( isRainy ) {
    output('cold and rainy')
  }
  else {
    output('cold and dry')
  }
}
else {
  if ( isRainy ) {
    output('warm and rainy')
  }
  else {
    output('warm and dry')
  }
}
