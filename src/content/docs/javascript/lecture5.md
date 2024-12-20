---
title: Function in JavaScript , User Input in JavaScript
description: A details description of Function in JavaScript , User Input in JavaScript
---

### Function in JavaScript

A function is a block of code that performs a specific task. It is used to organize code into reusable blocks, making it easier to maintain and reuse code.

### Syntax of Function

```javascript
function functionName(parameters) {
  // code to be executed
}
```

### Function types

##### 1. named function

```javascript
function hello() {
  console.log("Hello World");
}
hello();
```

##### 2. anonymous function

```javascript
const mridu = function () {
  console.log("Hello mridu");
};
mridu();
```

##### 3. arrow function

```javascript
const mridu = () => {
  console.log("Hello mridu");
};
mridu();
```

##### 4. IIFE (Immediately Invoked Function Expression)

```javascript
(function () {
  console.log("Hello World");
})();
```

### Function parameters and arguments

parameters are the variables that are defined in the function definition.
arguments are the values that are passed to the function when it is called.

```javascript
// Example of parameters and arguments
function greet(name) {
  // 'name' is a parameter
  console.log("Hello, " + name);
}
greet("Mridupawan"); // "Mridupawan" is an argument
```

```javascript
// named function with parameters
function add(a, b) {
  console.log(a + b);
}
add(5, 10); // 15

function sub(a, b) {
  console.log(a - b);
}
sub(10, 5);

//  anonymous function with parameters
const add1 = function (a, b) {
  if (a === Number(10) && b === Number(5)) {
    console.log(a + b);
  } else {
    console.log("invalid input");
  }
};
add1(10, 5);

//  arrow function with parameters
const add2 = (num1, num2) => {
  console.log(num1 + num2);
};

add2(10, 20);

//  IIFE with parameters
(function (a, b) {
  console.log(a + b);
})(10, 5);
```

### NaN

```javascript
function add(num1, num2) {
  console.log(num1 + num2);
}

add(10); // output : NaN - not a number
```

When you call the function with only one argument, here's what happens:
num1 gets the value 10
num2 is undefined (because no second argument was provided) JavaScript tries to perform addition: 10 + undefined In JavaScript,
when you try to perform arithmetic operations with undefined, the result is NaN. This is because undefined cannot be converted to a number in a meaningful way.
To avoid this, you could:
Provide a default value for num2:

```javascript
function add(num1, num2) {
  if (num2 === undefined) {
    console.log("Please provide two numbers");
  } else {
    console.log(num1 + num2);
  }
}
add(10); // Output: Please provide two numbers
```

```javascript
function add(num1, num2) {
  console.log(num1 + (num2 || 0));
}

add(10); // Output: 10
```

### Arrow function with default parameters

```javascript
const add3 = (num1, num2 = 10) => {
  console.log(num1 + num2);
};

add3(10);
```

### alert , confirm

```javascript
alert("hello world");
confirm("hello world 2");
```

### User Input in JavaScript

```javascript
// prompt - for user input
let name = prompt("Enter your name");
console.log(name);
```

### Question related to Functions and User Input in js

```sh
1. Write a function that takes two numbers as input and returns their sum.
2. Create an arrow function that calculates the area of a circle given its radius.
3. Implement a named function that converts temperature from Celsius to Fahrenheit.
4. Write an arrow function to check if a given number is even or odd.
5. Implement an IIFE that reverses a string and prints it.
6. Create a function that takes a user's name as input and displays an alert with their name.
7. Use a named function to calculate the factorial of a number.
8. Implement an arrow function to find the maximum of two numbers.
9. Write an IIFE that reverses a string and displays it in the console.
10. Implement a function that takes a user's age as input and displays a confirmation dialog with their age.
```

### More Questions
```sh
// Functions
// What is the difference between regular functions, arrow functions, and function expressions in JavaScript? Provide examples for each.
// How would you create a function that takes two numbers as input and returns their sum?
// Explain the concept of higher-order functions. Can you provide an example of a higher-order function that takes another function as an argument?
// What is an Immediately Invoked Function Expression (IIFE)? Write a simple IIFE example.
// How do you create a function that accepts a varying number of arguments using the rest operator?

// User Input
// How can you take user input in a web application using JavaScript? Write a function that prompts the user for their name and displays a greeting.
// How do you handle and validate user input in JavaScript? For example, how can you ensure that a user enters a valid email address?
// Write a function that asks the user for their age using prompt and returns a message indicating whether they are an adult (18 years or older).

// Strings and String Methods
// What is the difference between using single quotes, double quotes, and backticks for strings in JavaScript?
// How can you find the length of a string in JavaScript? Write an example.
// What methods are available in JavaScript to change the case of a string (e.g., uppercase, lowercase)?
// How can you check if a string contains a specific substring? Provide examples using both includes() and indexOf() methods.
// Write a function that takes a string as input and returns the string reversed.
// What are the differences between slice(), substring(), and substr() methods in JavaScript? Provide examples.
// How can you split a string into an array of substrings based on a specific delimiter? Show an example.

// Template Literals
// What is a template literal, and how is it different from regular strings?
// Write a function that takes a user's first name and last name as arguments and returns a greeting message using template literals.
// How can you embed JavaScript expressions within a template literal? Provide an example that performs a simple calculation.
// Write a code snippet using template literals to create a multi-line string.
// How can you include variables and expressions inside a string using template literals? Give an example.
```
