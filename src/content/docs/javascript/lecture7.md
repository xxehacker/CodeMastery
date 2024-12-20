---
title: Number and Number Methods in JavaScript
description: A details description of Number and Number Methods in JavaScript
---

### Number

Number is a primitive data type in JavaScript. It is used to represent numeric values.

```javascript
// Number
let age = 20
let age2 = 20.29

console.log(typeof(age))
console.log(typeof(age2))
```

### Number Methods

Number methods are functions that are built into the JavaScript language. They are used to perform operations on numbers.

1. toString()	Returns a number as a string
2. toExponential()	Returns a number written in exponential notation
3. toFixed()	Returns a number written with a number of decimals
4. valueOf()	Returns a number as a number
5. toPrecision()	Returns a number written with a specified number of digits
6. isInteger()	Returns true if the value is an integer
7. isNaN()	Returns true if the value is NaN
8. parseFloat()	Parses an argument (converting a string to a floating-point number)
9. parseInt()	Parses an argument (converting a string to an integer)
10. prototype	Allows you to add properties and methods to an object

### 1. toString() 
```javascript
let num = 10;
console.log(num.toString()); // Output: "10"
```
### 2. toExponential() 
```javascript
let num = 10;
console.log(num.toExponential()); // Output: "1e+1"
```
### 3. toFixed() 
```javascript
let num = 10;
console.log(num.toFixed()); // Output: "10"
```
### 4. valueOf() 
```javascript
let num = 10;
console.log(num.valueOf()); // Output: 10
```
### 5. toPrecision() 
```javascript
let num = 10;
console.log(num.toPrecision()); // Output: "10"
```
### 6. isInteger() 
```javascript
let num = 10;
console.log(Number.isInteger(num)); // Output: true
```
### 7. isNaN() 
```javascript
let num = 10;
console.log(Number.isNaN(num)); // Output: false
```
### 8. parseFloat() 
```javascript
let num = "10.2";
console.log(parseFloat(num)); // Output: 10.2
```
### 9. parseInt() 
```javascript
let num = "10.2";
console.log(parseInt(num)); // Output: 10
```
### 10. prototype 
```javascript
let num = 10;
num.prototype = 20;
console.log(num.prototype); // Output: 20
```

### Questions !
```sh
1. What will be the output of the following code?
2. How does parseFloat handle strings with trailing characters?
3. What will be the result of the following code?
4. Can parseInt return a number from a string that starts with a non-numeric character?
5. How can you check if a number is an integer using JavaScript?
6. What will be the output of the following code?
7. What happens when you use parseInt on a string with spaces?
8. How does the toString() method work on a number?
9. What will be the output of the following code?
10. Can you convert a boolean to a number using the Number() method?
```