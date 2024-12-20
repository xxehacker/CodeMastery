---
title: Advance function
description: A details description of advance functions in javascript
---

In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions. Advanced concepts like closures, higher-order functions, recursion, and function currying allow developers to write more dynamic, flexible, and concise code.

## 1. Higher-Order Functions
A higher-order function is a function that either takes another function as an argument, returns a function, or both. This allows for greater abstraction and code reuse.

1. 
```javascript
function higherOrder(fn) {
  return function(x) {
    return fn(x);
  };
}

const square = higherOrder(x => x * x);
console.log(square(5)); // 25
```
2. 
```javascript
// A simple function to greet someone
function greet(name) {
    return `Hello, ${name}!`;
}

// Higher-order function
function processUserInput(callback) {
    const name = "John";
    return callback(name);
}

// Calling the higher-order function
console.log(processUserInput(greet)); // Output: Hello, John!

```

## 2. Closures

A closure is the combination of a function and the lexical environment in which it was declared. Closures allow functions to access variables from an outer function scope even after the outer function has returned.


```javascript
function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer Variable: ${outerVar}, Inner Variable: ${innerVar}`);
  };
}

const closureFunc = outerFunction('Hello');
closureFunc('World'); // Output: Outer Variable: Hello, Inner Variable: World
```


## 3. Currying

Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.

```javascript
function add(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = add(5);
console.log(addFive(3)); // 8

```

## 4. Recursion

Recursion is a technique where a function calls itself to solve smaller instances of the same problem. It’s useful for problems like traversing trees or performing operations on deeply nested data structures.

```javascript
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

## 5. Function Composition

Function composition is the process of combining two or more functions into a single function, where the output of one function becomes the input of another.

```javascript
const compose = (f, g) => x => f(g(x));

const double = x => x * 2;
const square = x => x * x;

const composed = compose(double, square);
console.log(composed(3)); // Output: 18
```


## 6. Callback Functions

A callback function is a function passed into another function as an argument and executed after some operation has been completed. This is commonly used in asynchronous operations like fetching data.

1.
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Data fetched';
    callback(data);
  }, 2000);
}

fetchData((data) => console.log(data)); // Output after 2 seconds: Data fetched
```
2. 

```javascript
// A simple function that adds two numbers
function add(a, b) {
    return a + b;
}

// A function that takes another function as a callback
function calculate(callback, num1, num2) {
    return callback(num1, num2);
}

// Calling calculate with add as a callback
const result = calculate(add, 5, 3);
console.log(result); // Output: 8

```
## 7. Asynchronous Functions 
Asynchronous functions allow you to handle operations that take time to complete, such as network requests or file reading, without blocking the execution of other code. This is crucial for maintaining a responsive user interface and optimizing performance.

```javascript
// Define an async function to fetch user data
const fetchUserData = async (userId) => {
  try {
    // Await the response from the fetch call
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Await the JSON conversion of the response
    const userData = await response.json();  
    // Log the fetched user data
    console.log(userData);
  } catch (error) {
    // Log any errors that occur during the fetch
    console.error('Error fetching user data:', error);
  }
};
// Call the function with a user ID
fetchUserData(1);
```



## > what is expensive function ?

```sh
An expensive function is a function that requires substantial computational resources, such as time, memory, or processing power, to execute. This can be due to:

High Time Complexity: Functions with algorithms that have high time complexities (e.g., O(n²), O(2^n)) can take a long time to compute, especially for large inputs.
Complex Calculations: Functions performing intricate calculations or processing large datasets may be slow.
External System Calls: Functions that interact with databases, APIs, or other external systems can experience delays due to network latency or resource constraints.
Recursive Nature: Functions that use excessive recursion without optimization can lead to increased memory usage and slower performance.
Overall, expensive functions can significantly impact application performance, making it essential to optimize them or use alternative approaches when necessary.
```

## > Debouncing and Throttling: Simple Examples and Explanations
Both debouncing and throttling are techniques used to control the rate at which functions are executed, particularly in response to events like scrolling, resizing, or typing. Here’s a simplified explanation and examples for both concepts:

##### 1. Debouncing
Debouncing is a technique used to ensure that a function is only executed after a certain period of inactivity. This is particularly useful for handling events that can fire multiple times in quick succession, like key presses or window resizing.

Use Case: Suppose you want to fetch search results from an API after the user has stopped typing for a certain amount of time. You wouldn’t want to make an API call for every single keystroke.

##### Example of Debouncing

```javascript
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Call the function after the delay
    }, delay);
  };
}

// Function to be debounced
function search(query) {
  console.log(`Searching for: ${query}`);
}

// Debounced version of the search function
const debouncedSearch = debounce(search, 300);

// Simulate user typing
debouncedSearch('JavaScript'); // Will wait 300ms
debouncedSearch('JavaScript is'); // Waits again
debouncedSearch('JavaScript is awesome!'); // Waits again

// After 300ms, the output will be: "Searching for: JavaScript is awesome!"
```

Explanation:-

How it works: The debounce function creates a timeoutId variable to store the ID of the current timeout. Whenever the debounced function is called, it clears the previous timeout and sets a new one. If the function is called again before the delay period is over, the previous call is canceled, and the timer resets.

Effect: This ensures that search is only called after the user has stopped typing for 300 milliseconds.


##### 2. Throttling
Throttling is a technique used to ensure that a function is executed at most once in a specified time period, regardless of how many times the event is triggered. This is useful for events that are expected to fire frequently, such as scrolling or resizing.

Use Case: You want to log the scroll position of the window but only want to log the position once every 100 milliseconds to avoid flooding the console.

```javascript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function(...args) {
    const context = this;

    if (!lastRan) {
      func.apply(context, args); // Call the function immediately
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args); // Call the function after the limit
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Function to be throttled
function logScroll() {
  console.log(`Scroll position: ${window.scrollY}`);
}

// Throttled version of the logScroll function
const throttledLogScroll = throttle(logScroll, 100);

// Listen to scroll events
window.addEventListener('scroll', throttledLogScroll);

```

Explanation:-

How it works: The throttle function maintains two variables: lastFunc, which is used to store the ID of the timeout, and lastRan, which stores the last time the function was executed. When the throttled function is called, it checks if enough time has passed since the last execution. If it has, it calls the function immediately; otherwise, it sets a timeout to call it once the time limit is reached.

Effect: This ensures that logScroll is executed at most once every 100 milliseconds, even if the user scrolls multiple times within that period.







