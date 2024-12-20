---
title: String and String Methods in JavaScript
description: A details description of String and String Methods in JavaScript
---

### String

String is a sequence of characters. It is a primitive data type in JavaScript.

```javascript
let hello10 = "hello world";
let hello2 = 'hello world 2';
```

### Template Literals

Template literals are a feature introduced in ES6 (2015) that allows you to work with strings in a more flexible and powerful way. They are enclosed by backticks (`) instead of quotes (") and support embedded expressions.

```javascript
let name = "Mridu";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Mridu!
```
```javascript

let hello = "hello ";
let name = 'My name is Mridu';

// we can use function in template literals
const fun1 = (a,b) => {
  return a+b 
};

// template literals (``)
let example1 = `hello world 3 ${hello} ${name} ${10 + 20} ${fun1(1,2)}`;
console.log(example1);

// normal string ("")
let example2 = "hello world 3 ${hello} ${name} ${10 + 20} ${fun1(1,2)}";
console.log(example2);

// normal string ('')
let example3 = 'hello world 3 ${hello10} ${hello2} ${10 + 20} ${fun1(1,2)}';
console.log(example3);
```
### Escape Character

Escape sequence
\n - new line
\t - tab
\\ - backslash
\' - single quote
\" - double quote
\b - backspace
\f - form feed
\r - carriage return
\v - vertical tab
```javascript

let example4 = "hello world 4 \n hello world 5";
console.log(example4);

let example5 = "hello world 6 \'hello world 7\'";
console.log(example5);

let example6 = "hello world 8 \"hello world 9\"";
console.log(example6);

let example7 = "hello world 10 \\hello world 11";
console.log(example7);

let example8 = "hello world 12 \bhello world 13";
console.log(example8);

let example9 = "hello world 14 \fhello world 15";
console.log(example9);

let example10 = "hello world 16 \rhello world 17";
console.log(example10);

let example11 = "hello world 18 \thello world 19";
console.log(example11);

```

### String Methods

1. length
2. toUpperCase()
3. toLowerCase()
4. trim()
5. charAt()
6. charCodeAt()
7. concat()
8. indexOf()
9. lastIndexOf()
10. slice()
11. substring()
12. substr()
13. split()
14. join()
15. replace()
16. replaceAll()
17. search()
18. match()
19. matchAll()
20. includes()
21. startsWith()
22. endsWith()
23. repeat()

```javascript

let str = "Hello World";

console.log(str.length); //output: 11
console.log(str.toUpperCase()); //output: HELLO WORLD
console.log(str.toLowerCase()); //output: hello world
console.log(str.trim()); //output: Hello World
console.log(str.charAt(0)); //output: H
console.log(str.charCodeAt(0)); //output: 72
console.log(str.concat(" Welcome to the world of JavaScript")); //output: Hello World Welcome to the world of JavaScript
console.log(str.indexOf("o")); //output: 4
console.log(str.lastIndexOf("o")); //output: 7
console.log(str.slice(0, 5)); //output: Hello
console.log(str.substring(0, 5)); //output: Hello
console.log(str.substr(0, 5)); //output: Hello
console.log(str.split(" ")); //output: ["Hello", "World"]
console.log(str.split(" ")[0]); //output: Hello
console.log(str.split(" ")[1]); //output: World

console.log(str.replace("Hello", "Hi")); //output: Hi World
console.log(str.replaceAll("o", "a")); //output: Hello Warld
console.log(str.search("o")); //output: 4
console.log(str.match("o")); //output: o
console.log(str.matchAll("o")); //output: o
console.log(str.includes("o")); //output: true
console.log(str.startsWith("H")); //output: true
console.log(str.endsWith("d")); //output: true
```

#### More Examples

```javascript
// 1. length
let name = "Nakul";
console.log(name.length); // 5

// 2. indexOf : its check the index of the string and return -1 if not found
let collegeName = "Assam downtown university"; 
console.log(collegeName.indexOf("A")); 
console.log(collegeName.indexOf("a"));
console.log(collegeName.indexOf("z")); // -1 - not found

// 3. lastIndexOf : its check the last index of the string and return -1 if not found
let collegeName2 = "Assam downtown university 2"; 
console.log(collegeName.lastIndexOf("2")); // 15

// 4. charAt : its return the character at the index
let collegeName3 = "Assam downtown university 3"; 
console.log(collegeName3.charAt(0)); // A

// 5. split : its split the string into an array
let collegeName4 = "Assam downtown university 4"; 
console.log(collegeName4.split(" ")); // ["Assam", "downtown", "university"]

// 6. replace : its replace the string
let collegeName5 = "Assam downtown university 5"; 
console.log(collegeName5.replace("university", "College")); // university changed to college

// 7. slice : its slice the string and return the new string
let collegeName6 = "Assam downtown university 6";
console.log(collegeName6.slice(0,5)); // Assam

// 8. substring : its slice the string and return the new string
let collegeName7 = "Assam downtown university 7";
console.log(collegeName7.substring(0,5)); // Assam

// 9. toUpperCase : its convert the string to uppercase
let collegeName8 = "Assam downtown university 8";
console.log(collegeName8.toUpperCase()); // ASSAM DOWNTOWN UNIVERSITY

// 10. toLowerCase : its convert the string to lowercase
let collegeName9 = "Assam downtown university 9";
console.log(collegeName9.toLowerCase()); // assam downtown university

// 11. concat : its concat the string
let collegeName10 = "Assam downtown university 10";
let collegeName11 = "Assam downtown university 11";
// console.log(collegeName10 + " " + collegeName11);
console.log(collegeName10.concat(" ",collegeName11)); // Assam downtown university 10 Assam downtown university 11

// 12.trim : its trim the string
let collegeName12 = "        Assam downtown university 12";
console.log(collegeName12.trim()); // Assam downtown university


// Demo of string method 
let user = prompt("Enter your name");
console.log(user.trim());


let userInp = prompt("Enter your name");
console.log(userInp.replace('hello' , "world"))

```




