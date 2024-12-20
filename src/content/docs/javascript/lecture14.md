---
title: JSON Object in JavaScript
description: A details description of JSON Object in JavaScript
---

## JSON 

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is not a data format, but a way of encoding data in text format that can be read by computers. JSON is often used when data is sent from a server to a web application. It is a text format that is used to store and transport data. It is a popular data format used in web applications. 

## Creating JSON Object

```javascript
{
    "name": "Mridupawan",
    "age": 30,
    "city": "Guwahati",
    "country": "India"
}
```


## Methods of JSON object

1. Convert a JavaScript Object to JSON: JSON.stringify()

```javascript

const person = {
    name: "Mridupawan",
    age: 30,
    city: "Guwahati"
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"Mridupawan","age":30,"city":"Guwahati"}
```

2. Convert JSON to JavaScript Object: JSON.parse() 

```javascript

const jsonData = '{"name":"Mridupawan", "age":30, "city":"Guwahati"}';

const obj = JSON.parse(jsonData);
console.log(obj);
```


## Fetch JSON Data from an API:

You can use the fetch() method to get JSON data from an API and convert it into a JavaScript object.

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) // Convert to JSON
  .then(data => console.log(data))    // Use the data
  .catch(error => console.error('Error:', error));
```

## What is the difference between JSON and objects in JavaScript ?

#### JSON

- JSON is a data format, and it is always a string.
- Keys (property names) must be wrapped in double quotes.
- Data types in JSON are limited to strings, numbers, arrays, booleans, and null.


#### Objects

- JavaScript objects are native to JavaScript and can exist as actual data structures.
- Keys (property names) do not require quotes (though they can be quoted).
- JavaScript objects can hold functions and other complex data types, such as undefined and methods.



## Summary of Differences:

<table border="2" cellspacing="2" cellpadding="2">
  <thead border="2">
    <tr>
      <th>Aspect</th>
      <th>JSON</th>
      <th>JavaScript Object</th>
    </tr>
  </thead>
  <tbody border="2">
    <tr>
      <td>Format</td>
      <td>String (text format)</td>
      <td>In-memory data structure</td>
    </tr>
    <tr>
      <td>Key Quotes</td>
      <td>Required (double quotes)</td>
      <td>Not required</td>
    </tr>
    <tr>
      <td>Data Types</td>
      <td>Limited (string, number, etc.)</td>
      <td>Supports functions, undefined, etc.</td>
    </tr>
    <tr>
      <td>Usage</td>
      <td>Data interchange format</td>
      <td>Used in JavaScript programs</td>
    </tr>
    <tr>
      <td>Conversion</td>
      <td>Parsed with JSON.parse()</td>
      <td>Stringified with JSON.stringify()</td>
    </tr>
  </tbody>
</table>
