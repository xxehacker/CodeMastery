---
title: Introduction of JS and variable in javascript
description: A details description of JS and variables in js
---

### Introduction to JavaScript
JavaScript is a high-level, dynamic, and interpreted programming language that is primarily used for client-side scripting on the web. It's often used to add interactive elements to websites, create web applications, and make web pages more engaging.

### What is JavaScript used for?
- Creating interactive web pages
- Developing web applications
- Adding special effects to websites
- Creating games
- Animating images
- Validating form data
- And much more!

### Variables in JavaScript

In JavaScript, a variable is a container that holds a value. You can think of it as a labeled box where you can store a value. Variables are used to store and manipulate data in your code.

### Declaring Variables

In JavaScript, you can declare a variable using the `let`, `const`, or `var` keywords.

- `let` and c`onst` are used to declare block-scoped variables, which means they are only accessible within the block they are declared in.
- `var` is used to declare function-scoped variables, which means they are accessible throughout the function they are declared in.

### When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

Here's an example of declaring a variable:

```javascript
a = 10;
console.log(a); // Outputs: 10

a = 20;
console.log(a); // Outputs: 20

var x = 5;
var y = 6;
var z = x + y;
console.log(z)

let a = 20;
a = 50;
console.log(a)

# Error
const email = "nakul@gmail.com"
email = "mridupawan@gmail.com"
console.log(email)

__________________________________
# Working
let hello_world 
let _hello
let hello10 

# Not working 
let 20dhd  
let #hello
let (hello

let name = "mridupawan"
console.log(name)

__________________________________
// Hoisting
let a;
a = 10;
console.log(a)

__________________________________
// Example of Global variable and local variable in JS
let num1 = 10
console.log(num1) // 10

function abc(){
    let num2 = 10
    console.log(num2) // 20
    console.log(num1) // 10
}
abc()
console.log(num1) // 10

// global variable
let num1 = 10
console.log(num1) // 10

function abc(){
    // local variable 
    let num1 = 20
    console.log(num1) // 20
    console.log(num1) // 20
}
abc()
console.log(num1) // 20


// global variable update
let num2 = 10
console.log(num2) 

function abc(){
    // update
    num2 = 20
    console.log(num2) 
}
abc()
console.log(num3)

__________________________________
// Error : Assignment to constant variable.
const num3 = 10
console.log(num3) 

function abc(){
    // update
    num3 = 20
    console.log(num3) 
}
abc()
console.log(num3)
__________________________________
// Not meaningfull
let gadiohadbadkd = "nakul"
console.log(gadiohadbadkd)

// Meaningful variable
let name = "nakul"
console.log(name)

```


### Questions related to variables !

```sh

What is a variable in programming?
How do you declare a variable in JavaScript? Provide an example.
What are the differences between var, let, and const in JavaScript?
What is a global variable, and how is it different from a local variable?
What happens if you try to use a variable before declaring it in JavaScript?
Why is it important to choose meaningful variable names in your code?
What is variable hoisting in JavaScript, and how does it work?
What are constants, and how do they differ from regular variables?

```
