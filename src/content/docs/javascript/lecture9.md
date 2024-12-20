---
title: Loop in JavaScript
description: A details description of Loop in JavaScript
---

### Loop

Loop is a way to repeat a block of code.

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### Different Types of Loop

1. For Loop 
2. While Loop
3. Do While Loop
4. For In Loop
5. For Of Loop


### For Loop

For loop is used to iterate over a block of code a specific number of times.

* array iteration using `for` loop
```javascript

let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]
for (let i = 0; i < whoami.length; i++) {
  console.log(whoami[i]);
}

// Reverse array loop
// why -1 : because array index start from 0
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
```

* object iteration using `for` loop
```javascript
let whoami = {
    name: 'mridupawan',
    age: 30,
    hobby: 'coding'
}

for (let i = 0; i < Object.keys(student).length; i++) {
  console.log(Object.keys(student)[i] + ":" + student[Object.keys(student)[i]]);
}


//  Reverse object loop
for (let i = Object.keys(whoami).length - 1; i >= 0; i--) {
    console.log(Object.keys(whoami)[i] + ":" + Object.values(whoami)[i]);
    // console.log(Object.keys(whoami)[i] + ":" + whoami[Object.keys(whoami)[i]]);
}


```

* string iteration using `for` loop
```javascript
let whoami = 'mridupawan'
for (let i = 0; i < whoami.length; i++){
    console.log(whoami[i])
}

//  Reverse string loop
for (let i = whoami.length - 1; i >= 0; i--) {
  console.log(whoami[i])
}


```

### While Loop

While loop is used to iterate over a block of code while a condition is true.

* array iteration using `while` loop
```javascript
// Array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
let i = 0;
while (i < whoami.length) {
  console.log(whoami[i]);
  i++;
}

// Reverse array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30] 
let k = whoami.length - 1;

while (k >= 0) {
  console.log(whoami[k]);
  k--;
}
```


* object iteration using `while` loop

```javascript
// Object loop
let whoami = {
    name: 'mridupawan',
    age: 30,
    hobby: 'Hacking'
};

let values = Object.values(whoami);
let i = 0;
while (i < values.length) {
    console.log(values[i]);
    i++;
}

// Reverse object loop
let whoamiObj2 = {
  name: "mridupawan",
  age: 30,
  hobby: "Hacking",
};

let lengthOfObject = Object.keys(whoamiObj2).length - 1;

while (lengthOfObject >= 0) {
    console.log(Object.keys(whoamiObj2)[m] + ":" + Object.values(whoamiObj2)[m]);
  m--;
}

```

* String iteration using `while` loop
```javascript
// String loop
let whoami = 'mridupawan'
let i = 0
while (i < whoami.length) {
  console.log(whoami[i]);
  i++;
}

// Reverse string loop
let whoami = 'mridupawan'
let k = whoami.length - 1

while(k >= 0){
  console.log(whoami[k]);
  k--;
}
```

### Do While Loop

Do while loop is used to iterate over a block of code while a condition is true.

```javascript
// Do while loop
let i = 0;
do {
    console.log("Hello world ",i);
    i++;
} while (10 > i);

```
* array iteration using `do while` loop

```javascript

// Array loop
let whoami = ["mridupawan", "coder", "xxehacker", "Bordoloi", 30];
let i = 0;

do{
  // console.log(i)
  console.log(whoami[i]);
  i++;
} while(whoami.length > i);

// Reverse a array
let whoami2 = ["mridupawan", "coder", "xxehacker", "Bordoloi", 30];
let  m = whoami2.length - 1

do {
    console.log(whoami2[m]);
    m--;
}while(m >= 0)

```

* object iteration using `do while` loop

```javascript
let obj1 = {
    name: "mridupawan",
    age: 23,
    hobby: "Hacking",
    hobby2: "Programming",
    email: "mridupawan503@gmail.com",
}

let j = 0;

do{
    // console.log(Object.keys(obj1)[j] + ":" + obj1[Object.keys(obj1)[j]]);
    console.log(Object.keys(obj1)[j] + ":" + Object.values(obj1)[j]);
    j++;

}while(Object.keys(obj1).length > j);


//  Reverse an object
let obj2 = {
    name: "mridupawan",
    age: 23,
    hobby: "Hacking",
    hobby2: "Programming",
    email: "mridupawan503@gmail.com",
}

let k= Object.keys(obj2).length - 1;
do{
    console.log(Object.keys(obj2)[k] + ":" + Object.values(obj2)[k]);
    k--;
}while(k >= 0)


```

* string iteration using `do while` loop

```javascript
// String loop
let whoami = 'mridupawan'
let i = 0;
do {
  console.log(whoami[i]);
  i++;
} while (i < whoami.length);

// Reverse string loop
let whoami = 'mridupawan'
let k = whoami.length - 1;
do {
  console.log(whoami[k]);
  k--;
} while (k >= 0);

```
### For In Loop

For in loop is used to iterate over a block of code for each element in an object.


* array iteration using `for in` loop
```javascript
// Array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
for (const element in whoami) {
  // console.log(element);  // 0 1 2 3 4
  console.log(whoami[element]); // mridupawan coder xxehacker Bordoloi 30
}

// Reverse array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
for (const element in whoami) {
  console.log(whoami[whoami.length - 1 - element]); // 30 Bordoloi xxehacker coder mridupawan
}

```

* object iteration using `for in` loop
```javascript
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}

for (const element in whoami) {
  console.log(whoami[element]); // mridupawan 30 coding
}

// Reverse object loop
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}

for (const element in whoami) {
  console.log(whoami[whoami.length - 1 - element]); // coding 30 mridupawan
}
```

* string iteration using `for in` loop
```javascript
// String loop
let whoami = 'mridupawan'
for (const element in whoami) {
  console.log(whoami[element]); // m r i d u p a w a n
}

// Reverse string loop
let whoami = 'mridupawan'
for (const element in whoami) {
  console.log(whoami[whoami.length - 1 - element]); // n a w a p u d i r m
}

```



### For Of Loop

For of loop is used to iterate over a block of code for each element in an array.

* array iteration using `for of` loop

```javascript
// Array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
for (const element of whoami) {
  console.log(element); // mridupawan coder xxehacker Bordoloi 30
}
```

* object iteration using `for of` loop

```javascript
// Example1: Object loop
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}

// whoami is not iterable
for (const element of whoami) {
  console.log(element); // error
  console.log(whoami[element]); //error
} 

// Example2: right way to loop object using for of loop
let whoami = {
  name: 'mridupawan',
  age: 30,
  hobby: 'coding'
}
for (const element of Object.values(whoami)) {
  console.log(element); // mridupawan 30 coding
}

``` 

* string iteration using `for of` loop
```javascript
// String loop
let whoami = 'mridupawan'
for (const element of whoami) {
  console.log(element);
}

```

### Methods to Iterate Over an Array

1. forEach()
2. map()
3. filter()
4. reduce()

### ForEach 

ForEach is used to iterate over a block of code for each element in an array.

```javascript
// Array loop
let whoami = ['mridupawan',"coder" , "xxehacker" , "Bordoloi", 30]  
whoami.forEach((element) => console.log(element))

//Example1:  Object loop
let whoami = {
    name: 'mridupawan',
    age: 30,
    hobby: 'Hacking'
}

// whoami.forEach is not a function
whoami.forEach((element) => {
  console.log(element);
}); // error

//Example2:  Right way to use forEach in object
let whoami = {
    name: 'mridupawan',
    age: 30,
    hobby: 'Hacking'
};

Object.entries(whoami).forEach(([key,value])=>{
    // console.log(key,value)
    console.log(`${key}: ${value}`)
})

// Example1: String loop
let whoami = 'mridupawan'
whoami.forEach((element) => {
  console.log(element);
}); // error :  whoami.forEach is not a function

// Example2: Right way to loop string
let whoami = 'mridupawan';
whoami.split('').forEach((char) => {
    console.log(char);
})
```

[Other methods to loop array](../javascript/lecture10)











