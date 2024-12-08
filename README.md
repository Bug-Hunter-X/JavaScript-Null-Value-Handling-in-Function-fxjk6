# JavaScript Null Value Handling
This example demonstrates a common error in JavaScript: failing to handle null or undefined values passed as function arguments.  Null values can cause unexpected crashes or incorrect results if your code doesn't explicitly check for them. The solution shows a simple way to address this using conditional checks.

## Bug
The original code doesn't check for null values before using parameters `a` and `b`.  If either is null, the function might fail unexpectedly. 

## Solution
The solution adds a check at the beginning of the function to explicitly handle null values. If either `a` or `b` is null, the function returns null, preventing unexpected errors.