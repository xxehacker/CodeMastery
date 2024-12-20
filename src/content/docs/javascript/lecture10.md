---
title: More about Map , Filter , Reduce Methods
description: A details description of More about Map , Filter , Reduce Methods
---

### Map , Filter , Reduce Methods

### Map method

map is a method that takes an array and applies a given function to every element in that array, creating a new array with the modified elements. It doesn’t change the original array; instead, it returns a new one. For example, if you have a list of numbers [1, 2, 3] and want to double each number, map can help you get a new array [2, 4, 6]. 

```javascript
// Example1: Map method over array
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
whoami.map((element) => {
  console.log(element);
}); // mridupawan coder xxehacker Bordoloi 30


// Example2: Map method over object
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}
Object.entries(whoami).map(([key, value]) => {
  console.log(`${key}: ${value}`);
}); // name: mridupawan age: 30 hobby: coding


// Example3: Map method over string
let whoami = 'mridupawan'
whoami.split('').map((element) => {
  console.log(element);
}); // m r i d u p a w a n

// Important Code 

let whoami = [
    {
  name: 'mridupawan',
  age: 30,
  hobby: 'hacking'
},
{
  name: 'nakul',
  age: 25,
  hobby: 'coding'
}
]
let whoami = [
    {
  name: 'mridupawan',
  age: 30,
  hobby: 'hacking'
},
{
  name: 'nakul',
  age: 25,
  hobby: 'coding'
}
]

whoami.map((values,key)=>{
    console.log(values , key)
})

```

### Filter method

filter is used to go through an array and select elements that meet a specific condition, creating a new array with only those elements. It doesn't modify the original array, just returns a new one with the filtered items. For instance, if you have an array of numbers [1, 2, 3, 4] and you want only the even numbers, filter will give you [2, 4].

```javascript
// Example1: Filter method over array
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
let filter = whoami.filter((element) => {
  return element !== 'mridupawan';
});
console.log(filter); 
// output: ["coder", "xxehacker", "Bordoloi", 30]

// Example2: Filter method over object
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}

let filter = Object.entries(whoami).filter(([key, value]) => {
  return value !== 'mridupawan';
});
console.log(filter);
// output: [ [ 'age', 30 ], [ 'hobby', 'coding' ] ]


// Example3: Filter method over string
let whoami = 'mridupawan'
let filter = whoami.split('').filter((element) => {
  return element !== 'i';
});
console.log(filter);
// output: ["m", "r", "d", "u", "p", "a", "w", "a", "n"]

// Important Code

let whoami = [
  {
    name: 'mridupawan',
    age: 30,
    hobby: 'hacking'
  },
  {
    name: 'nakul',
    age: 25,
    hobby: 'coding'
  }
]

let result = whoami.filter((values) => {
  return values.name === 'mridupawan'; // filter by name
})

console.log(result);

```

### Reduce method

reduce processes an array by applying a function that combines its elements into a single value. It works by taking each element and combining it with an ongoing result, which you define with your function. For example, if you want to add up all the numbers in [1, 2, 3, 4], reduce will help you get the total 10.

```javascript
// Example1: Reduce method over array
let whoami = ['mridupawan', 'coder', 'xxehacker', 'Bordoloi', 30];
let searchItem = 'mridupawan';

let count = whoami.reduce((accumulator, current) => {
  return current === searchItem ? accumulator + 1 : accumulator;
}, 0);

console.log(count); // Output: 1


// Example2: Reduce method over object
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
};

let totalLength = Object.values(whoami).reduce((accumulator, currentValue) => {
  // Convert non-string values to string for length calculation
  return accumulator + (typeof currentValue === 'string' ? currentValue.length : currentValue.toString().length);
}, 0);

console.log(totalLength); // Output: 18

// Example3: Reduce method over string
let whoami = 'mridupawan'
let totalLength = whoami.split('').reduce((accumulator, currentValue) => {
  return accumulator + currentValue.length;
}, 0);
console.log(totalLength); // Output: 10


```

### More examples related to map , filter , reduce methods
```javascript

// 1. Using `map`, `filter`, and `reduce` with Arrays
const numbers = [1, 2, 3, 4, 5, 6];

// 1.1 `map` example
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled); // Output: [2, 4, 6, 8, 10, 12]

// 1.2 `filter` example
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // Output: [2, 4, 6]

// 1.3 `reduce` example
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum:', sum); // Output: 21


// 2. Using `map`, `filter`, and `reduce` with an Array of Objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// 2.1 `map` example
const names = users.map(user => user.name);
console.log('Names:', names); // Output: ['Alice', 'Bob', 'Charlie']

// 2.2 `filter` example
const adults = users.filter(user => user.age >= 30);
console.log('Adults:', adults); // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

// 2.3 `reduce` example
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log('Total Age:', totalAge); // Output: 90


// 3. Using `map`, `filter`, and `reduce` with Strings
const str = 'hello world';

// 3.1 `map` example
const uppercased = str.split('').map(char => char.toUpperCase()).join('');
console.log('Uppercased String:', uppercased); // Output: 'HELLO WORLD'

// 3.2 `filter` example
const vowels = str.split('').filter(char => 'aeiou'.includes(char)).join('');
console.log('Vowels:', vowels); // Output: 'eoo'

// 3.3 `reduce` example
const charCount = str.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log('Character Count:', charCount); 
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
```

