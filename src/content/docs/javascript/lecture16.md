---
title: Data Fetching in JavaScript
description: A details description of Data Fetching in JavaScript
---

## Data Fetching

Data fetching in JavaScript refers to retrieving data from external sources, such as APIs or databases, and incorporating it into a web application. This is essential for modern web applications that need to dynamically display data. JavaScript provides several methods for fetching data:


1. XMLHttpRequest
2. fetch() API
3. axios


##  XMLHttpRequest (XHR)

Before fetch() was introduced, XMLHttpRequest was the primary way of making HTTP requests in JavaScript. While still used in some legacy codebases, it is more verbose and less intuitive than fetch().

### GET request Example
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/', true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(JSON.parse(xhr.responseText));  // Parsing the JSON response
  } else {
    console.error('Error:', xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error('Request failed');
};
xhr.send();

```

## fetch() API 
The fetch() API is the modern way of making HTTP requests in JavaScript. It returns a promise, which allows you to work with asynchronous code easily. It can handle various types of requests, including GET, POST, PUT, and DELETE.

### GET request Example
```javascript
// GET request to fetch data from an API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // Parsing JSON from the response
  .then(data => console.log(data))    // Handling the data
  .catch(error => console.error('Error:', error));  // Handling errors
```
### async/await Example

async/await syntax allows you to write asynchronous code in a more synchronous and readable way. It's often used with the fetch() API for cleaner code, without needing to chain multiple .then() statements.

### GET request Example with async fuction
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```
### GET request Example
```javascript
// GET request to fetch data from an API
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  const data = await res.json();
  output.innerText = JSON.stringify(data);
  console.log(data);
});
```

### POST request Example
```javascript
// POST request to send data to an API
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const url = "https://example.com/api/update";
  const data = {
    title: "foo",
    body: "bar",
    userId: 1
  };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  output.innerText = JSON.stringify(json);
});
```
### POST request Example
```javascript
// POST request to send data to an API
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', age: 30 }), // Sending data as JSON
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));

```

## axios
Axios is a popular third-party library for making HTTP requests in JavaScript. It provides an easier-to-use API than fetch(), with automatic JSON parsing and error handling.

Installing Axios:
```sh
npm install axios
```
### GET Request Example

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data); // The data returned by the API
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### POST Request Example

```javascript
axios.post('https://api.example.com/submit', {
    name: 'John',
    age: 30
  })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Handling Errors in Data Fetching

When making HTTP requests, it’s important to handle potential errors, such as:

1. Network failures
2. Invalid responses
3. Server-side errors (e.g., 404 or 500 status codes)

You can handle errors using .catch() in fetch() or try/catch blocks when using async/await.
Example of error handling in fetch():

### Example of error handling in fetch():

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('There was a problem with the fetch operation:', error));

```

## Questions
```sh
What is the fetch() API in JavaScript, and how does it differ from XMLHttpRequest?
How do you make a basic GET request using fetch() in JavaScript?
How can you handle the response from a fetch() call in JSON format?
How do you send a POST request using fetch() and pass data to the server?
What is the difference between a GET request and a POST request?
Explain how promises work in the context of fetch(). How do .then() and .catch() help in handling the response?
What is the purpose of async and await in data fetching? How does it simplify the code compared to promises?
How would you handle errors in fetch() requests (such as network failures or server errors)?
How can you handle non-200 status codes (like 404 or 500) in a fetch() response?
What is the importance of setting headers in a fetch() request, and how would you do that?
What is CORS (Cross-Origin Resource Sharing), and how does it impact data fetching from different domains?
How would you implement retry logic in case a fetch() request fails due to network issues?
How do you make multiple API requests in parallel using fetch()? Explain with an example.
What are the security risks associated with using fetch() to handle sensitive data (like API keys or user credentials)?
How do you handle file uploads (e.g., images or documents) using fetch()?
Write a code snippet to make a POST request using fetch() and send the following data to the server: { username: "john", password: "1234" }.
How would you write an async function to fetch data from an API and handle potential errors using a try/catch block?
Write a code snippet that fetches data from two APIs simultaneously and logs both responses once they are received.
Write a function that fetches user data from an API and returns it, but throws an error if the user is not found (404 status code).
How would you implement a search feature that fetches filtered results from an API as the user types in a search box?
```