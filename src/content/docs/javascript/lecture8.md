---
title: Array and Array Methods in JavaScript
description: A details description of Array and Array Methods in JavaScript
---

### Array

Array is a special variable that can store multiple values in a single variable.

```javascript
// Array
let fruits = ["apple", "banana", "orange"]

console.log(fruits)
```
### Different way to create an array

1. Using the `new` keyword
2. Using the `Array` constructor
3. Using the `Array.of` method
4. Using the `Array.from` method

```javascript
// Using the `new` keyword
let fruits = new Array("apple", "banana", "orange")

// Using the `Array` constructor
let fruits = Array("apple", "banana", "orange")

// Using the `Array.of` method
let fruits = Array.of("apple", "banana", "orange")

// Using the `Array.from` method

let fruits = Array.from(["apple", "banana", "orange"])

console.log(fruits)
```

### Array Methods
```sh
1. push()	Adds new items to the end of an array
2. pop()	Removes the last item from an array
3. shift()	Removes the first item from an array
4. unshift()	Adds new items to the beginning of an array
5. slice()	Selects a part of an array and returns a new array
6. splice()	Adds/removes items to/from an array
7. sort()	Sorts the items in an array
8. reverse()	Reverses the order of the items in an array
9. join()	Joins all items in an array into a string
10. concat()	Joins two or more arrays
11. indexOf()	Returns the index of the first occurrence of an item in an array
12. lastIndexOf()	Returns the index of the last occurrence of an item in an array
13. forEach()	Calls a function for each array element
14. map()	Creates a new array by performing a function on each array element
15. filter()	Creates a new array with all elements that pass the test implemented by the provided function
16. reduce()	Executes a reducer function on each array element
17. reduceRight()	Executes a reducer function on each array element, starting from the last element
18. every()	Checks if all elements in an array pass the test implemented by the provided function
19. find()	Returns the value of the first element in an array that passes the test implemented by the provided function
20. includes()	Determines whether an array includes a certain value among its entries
21. Array.isArray()	Checks whether the passed value is an array
22. Array.prototype.entries()	Returns a new Array Iterator object that contains the key/value pairs for each index in the array
23. Array.prototype.keys()	Returns a new Array Iterator object that contains the keys for each index in the array
24. Array.prototype.values()	Returns a new Array Iterator object that contains the values for each index in the array
```


### Example of Array Methods each one of them
```javascript
// push() : Adds new items to the end of an array
let fruits = ["apple", "banana", "orange"]
fruits.push("grape")
console.log(fruits)

// pop() : Removes the last item from an array

let fruits = ["apple", "banana", "orange"]
fruits.pop()
console.log(fruits)

// shift() : Removes the first item from an array
let fruits = ["apple", "banana", "orange"]
fruits.shift()
console.log(fruits)

// unshift() : Adds new items to the beginning of an array
let fruits = ["apple", "banana", "orange"]
fruits.unshift("grape")
console.log(fruits)

// slice() : Selects a part of an array and returns a new array
let fruits = ["apple", "banana", "orange", "grape"]
let citrus = fruits.slice(1, 3)
console.log(citrus)

// splice() : Adds/removes items to/from an array
let fruits = ["apple", "banana", "orange", "grape"]
fruits.splice(1, 0, "kiwi", "mango")
console.log(fruits)

// sort() : Sorts the items in an array
let fruits = ["apple", "banana", "orange", "grape"]
fruits.sort()
console.log(fruits)

// reverse() : Reverses the order of the items in an array
let fruits = ["apple", "banana", "orange", "grape"]
fruits.reverse()
console.log(fruits)

// join() : Joins all items in an array into a string
let fruits = ["apple", "banana", "orange", "grape"]
let fruitsString = fruits.join(", ")
console.log(fruitsString)

// concat() : Joins two or more arrays
let fruits = ["apple", "banana", "orange", "grape"]
let fruits2 = ["kiwi", "mango"]
let fruits3 = fruits.concat(fruits2)
console.log(fruits3)

// indexOf() : Returns the index of the first occurrence of an item in an array
let fruits = ["apple", "banana", "orange", "grape"]
let index = fruits.indexOf("banana")
console.log(index)

// lastIndexOf() : Returns the index of the last occurrence of an item in an array
let fruits = ["apple", "banana", "orange", "grape", "banana"]
let index = fruits.lastIndexOf("banana")
console.log(index)

// forEach() : Calls a function for each array element
let fruits = ["apple", "banana", "orange", "grape"]
fruits.forEach(function(fruit) {
    console.log(fruit)
})

// map() : Creates a new array by performing a function on each array element
let fruits = ["apple", "banana", "orange", "grape"]
let fruits2 = fruits.map(function(fruit) {
    return fruit + "s"
})
console.log(fruits2)

// filter() : Creates a new array with all elements that pass the test implemented by the provided function
let fruits = ["apple", "banana", "orange", "grape"]
let fruits3 = fruits.filter(function(fruit) {
    return fruit.length > 5
})
console.log(fruits3)

// reduce() : Executes a reducer function on each array element
let fruits = [1, 2, 3, 4, 5]
let sum = fruits.reduce(function(total, fruit) {
    return total + fruit
}, 0)
console.log(sum)

// reduceRight() : Executes a reducer function on each array element, starting from the last element
let fruits = [1, 2, 3, 4, 5] 
let sum = fruits.reduceRight(function(total, fruit) {
    return total + fruit
}, 0)
console.log(sum)

// every() : Checks if all elements in an array pass the test implemented by the provided function
let fruits = [1, 2, 3, 4, 5]
let allPositive = fruits.every(function(fruit) {
    return fruit > 0
})
console.log(allPositive)

// find() : Returns the value of the first element in an array that passes the test implemented by the provided function
let fruits = [1, 2, 3, 4, 5]
let found = fruits.find(function(fruit) {
    return fruit > 3
})
console.log(found)

// includes() : Determines whether an array includes a certain value among its entries
let fruits = ["apple", "banana", "orange", "grape"]
let includes = fruits.includes("banana")
console.log(includes)

// Array.isArray() : Checks whether the passed value is an array
let fruits = ["apple", "banana", "orange", "grape"]
let isArray = Array.isArray(fruits)

// Array.prototype.entries() : Returns a new Array Iterator object that contains the key/value pairs for each index in the array
let fruits = ["apple", "banana", "orange", "grape"]
let entries = fruits.entries()
console.log(entries)

// Array.prototype.keys() : Returns a new Array Iterator object that contains the keys for each index in the array
let fruits = ["apple", "banana", "orange", "grape"]
let keys = fruits.keys()
console.log(keys)

// Array.prototype.values() : Returns a new Array Iterator object that contains the values for each index in the array
let fruits = ["apple", "banana", "orange", "grape"]
let values = fruits.values()
console.log(values)
```

### Different way to access the elements of an array [Array Iteration]

```javascript
let fruits = ["apple", "banana", "orange"]

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// Using the `for` loop
let fruits = ["apple", "banana", "orange"]
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Using the `for...of` loop
let fruits = ["apple", "banana", "orange"]
for (let fruit of fruits) {
    console.log(fruit)
}

// using the `for...in` loop
let fruits = ["apple", "banana", "orange"]
for (let index in fruits) {
    console.log(fruits[index])
}

// using the `while` loop
let fruits = ["apple", "banana", "orange"]
let i = 0
while (i < fruits.length) {
    console.log(fruits[i])
    i++
}

// using the `do...while` loop
let fruits = ["apple", "banana", "orange"]
let i = 0
do {
    console.log(fruits[i])
    i++
} while (i < fruits.length)

// Using the `forEach` method
let fruits = ["apple", "banana", "orange"]
fruits.forEach(function(fruit) {
    console.log(fruit)
})

// Using the `map` method
let fruits = ["apple", "banana", "orange"]
let fruits2 = fruits.map(function(fruit) {
    return fruit + "s"
})
console.log(fruits2)

// Using the `filter` method
let fruits = ["apple", "banana", "orange"]
let fruits3 = fruits.filter(function(fruit) {
    return fruit.length > 5
})
console.log(fruits3)

// Using the `reduce` method
let fruits = ["apple", "banana", "orange"] 
let fruits4 = fruits.reduce(function(total, fruit) {
    return total + fruit
}, 0)
console.log(fruits4)
 
// Using the `Array.prototype.entries` method
let fruits10 = ["apple", "banana", "orange"];
let entries = fruits10.entries();

for (let entry of entries) {
  console.log(entry); // Output: [0, "apple"], [1, "banana"], [2, "orange"]
}

```


### Question !

```sh

1. What is the difference between `push()` and `unshift()`?
2. What is the difference between `slice()` and `splice()`?
3. What is the difference between `map()` and `forEach()`?
4. What is the difference between `filter()` and `find()`?
5. What is the difference between `reduce()` and `reduceRight()`?
6. What is the difference between `every()` and `some()`?
7. What is the difference between `includes()` and `indexOf()`?
8. What is the difference between `entries()` and `keys()`?
9. What is the difference between `values()` and `map()`?
10. What is the difference between `filter()` and `map()`?
```


