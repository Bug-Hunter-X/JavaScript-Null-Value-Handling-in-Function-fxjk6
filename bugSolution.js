function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    console.warn('Null or undefined values encountered.');
    return null; // Handle null values gracefully
  }
  // Perform operations with 'a' and 'b' knowing they are not null or undefined 
  let result = a + b; //Example operation
  return result;
}
console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: Null with warning
console.log(foo(undefined, 10)); // Output: Null with warning