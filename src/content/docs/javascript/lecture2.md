---
title: Data Types in JavaScript
description: A details description of Data Types in JavaScript
---

### Data Types in JavaScript

In JavaScript, data types are used to classify the type of data that a variable can hold. There are several data types in JavaScript, including:

1. **Number**: Represents numeric values, both integers and floating-point numbers.
2. **String**: Represents a sequence of characters, enclosed in single or double quotes.
3. **Boolean**: Represents a logical entity with two possible values: true or false.
4. **Undefined**: Represents a variable that has been declared but not assigned a value.
5. **Null**: Represents a value that is nothing or a null value.
6. **Object**: Represents a complex data type that can hold multiple values and properties.
7. **Array**: Represents an ordered list of values.
8. **Function**: Represents a reusable block of code that can be called to perform a specific task.

### Number

Numbers in JavaScript can be integers or floating-point numbers. For example:

```javascript
let num = 10; // integer
let floatNum = 10.5; // floating-point number
```

### BigInt

BigInt is a data type that represents integers with arbitrary precision. For example:

```javascript
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof(bigInt))
console.log(bigInt)
```


### String

Strings in JavaScript are used to represent text. They can be enclosed in single or double quotes. For example:

```javascript
let name = "mridupawan";
let name2 = "nakul";
let age = "20";
console.log(typeof(age))
```

### Boolean

Booleans in JavaScript represent a logical entity with two possible values: true or false. For example:

```javascript
let isTrue = true;
let isFalse = false;
```

### Undefined

Undefined is a data type that represents a variable that has been declared but not assigned a value. For example:

```javascript
let undefinedVar;
```

### Null

Null is a data type that represents a value that is nothing or a null value. For example:

```javascript
let nullVar = null;
```

### Object

Objects in JavaScript are complex data types that can hold multiple values and properties. For example:

```javascript
// Example 1
let obj1 = { name: "mridupawan", age: 22 };
console.log(typeof obj1);
console.log(obj1);

// value access
console.log(obj1['age']);
console.log(obj1.age);

// Example 2
let fruids = {
  fruid1: "apple",
  fruid2: "banana",
};
console.log(fruids.fruid1);
console.log(fruids["fruid1"]);
console.log(fruids.fruid2);

// Example 3
let person = {
  name: "nakul",
  age: 22,
  address: "delhi",
  hobbies: ["cricket", "football", "reading"],
  marks: {
    maths: 90,
    science: 80,
  },
};

console.log(person)
console.log(person.hobbies)
console.log(person["hobbies"])
console.log(person.hobbies[0], person.hobbies[1])
console.log(person.marks.maths)
console.log(person.marks['maths'])
```

### Array

Arrays in JavaScript are ordered lists of values. For example:

```javascript
// Example 1
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits)

// Example 2
let array1 = [
  "nakul",
  20,
  {
    name: "nakul",
    age: 20,
  },
  ["apple", "banana", "cherry"],
];

console.log(array1)
console.log(array1[0])
console.log(array1[1])
console.log(array1[2]["name"]);
console.log(array1[2].name);
console.log(array1[3][2]);

// Example 3
let array2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(array2[1][2]);

```

### Function

Functions in JavaScript are reusable blocks of code that can be called to perform a specific task. For example:

```javascript
// Example 1
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Mridupawan')); // Output: Hello, Mridupawan!

// Example 2
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // Output: 30

// Example 3
function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 20)); // Output: 200

// Example 4
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 20)); // Output: 0.5


// Example 5
function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 20)); // Output: -10

//  arrow function
const add = (a, b) => a + b;
console.log(add(10, 20)); // Output: 30


```
More about function in [Functions](./lecture5)

### Question related to Data Types!
Here are some questions for each data type in JavaScript:
```sh

String
What is the length property of a string, and how is it used?
How do you access individual characters of a string in JavaScript?

Number
How do you create a number in JavaScript?
What is the difference between integer and floating-point numbers in JavaScript?

Boolean
How do you create a boolean value in JavaScript?
What are the two possible values of a boolean in JavaScript?

Undefined
What is the undefined value in JavaScript, and how is it used?
How do you check if a variable is undefined in JavaScript?
How do you assign undefined to a variable in JavaScript?

Object
How do you create an object in JavaScript?
What is the difference between an object and an array in JavaScript?
How do you access properties of an object in JavaScript?

Array
How do you create an array in JavaScript?
What is the difference between an array and an object in JavaScript?
How do you access elements of an array in JavaScript?


```


