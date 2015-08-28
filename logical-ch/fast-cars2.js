
input0 = 70
input1 = 80

// Test for both fast cars
if (input0>70 && input1>70) {
  output('2 fast cars')
}
// Test for 1 or the other 
else if (input0>70 || input1>70) {
  output('1 fast car')
}
// So both must be 70 or less
else {
  output('No fast cars')
}
