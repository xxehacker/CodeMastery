---
title: Conditional Statement in JavaScript
description: A details description of Conditional Statement in JavaScript
---
import { Steps } from '@astro/starlight/components';

### Conditional Statement in JavaScript


### What is Condition Statement?

A conditional statement is a statement that has one or two alternatives, depending on a boolean expression (condition) that is evaluated before the statement is executed. If the condition is true, one alternative is executed; if the condition is false, the other alternative is executed.


### Flow Chart of if-else

![Flow Chart of if-else](https://www.tutorialspoint.com/javascript/images/decision_making.jpg)



#### 1. The If Statement

The if statement is used to execute a statement or a block of statements if a condition is true. The syntax of if statement is as follows:


```javascript
if (condition) {
    statement;
}
```
```javascript
if (hour < 18) {
  greeting = "Good day";
}
```


#### 2. The Else Statement

The else statement is used to execute a statement or a block of statements if a condition is false. The syntax of else statement is as follows:

```javascript
if (condition) {
    statement;
}else{
    statement;
}
```
```javascript
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```


#### 3. The else if Statement

The else if statement is used to execute a statement or a block of statements if a condition is true. The syntax of else if statement is as follows:

```javascript
if (condition) {
    statement;
} else if (condition) {
    statement;
} else {
    statement;
}
```

```javascript
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

```sh

# if execute
if(true){
    // statement 
}


# else execute
if(false){
    // statement 
}else{
    // statement
}

# else execute
if(false){
    // statement 
}else if(false){
    // statement
}else{
    // statement
}

# if execute
if(10 > 5){
    // statement
} else{
    // statement
}

# else execute
if(20 < 40){
    // statement
} else{
    // statement
}


# if execute
if(20 <= 20){
    // statement
} else{
    // statement
}


# else execute
if(20 < 20){
    // statement
} else{
    // statement
}


# if execute
if(20 == "20"){
    // statement
} else{
    // statement
}    

# else execute
if(20 === "20"){
    // statement
} else{
    // statement
}   

# else execute
if(20 != "20"){
    // statement
} else{
    // statement
}

# if execute
if(20 !== "20"){
    // statement
} else{
    // statement
}

# else execute
let age = 18;
if(age > 18){
    // statement
} else if (age < 15){
    // statement
}else {
    // statement
}

# else if execute
let age2 = 18;
if(age2 > 18){
    // statement
    console.log("age is greater than 18");
} else if (age2 > 15){
    // statement
    console.log("age is greater than 15");
}else {
    // statement
    console.log("age is less than 18");
}


//  Nested if else 1
let num = 200

if(num > 100){
    if(num < 200){
        console.log("num is between 100 and 200");
    }else{
        console.log("num is greater than 200");
    }
}else{
    console.log("num is less than 100");
}

//  Nested if else  2
let i = 20;
let j = 21;

if (i == 10) {
    if (j == 20) {
        console.log("i is 10 and j is 20");
    } else {
        console.log("i is 10 but j is not 20");
    }
} else {
    if (j == 20) {
        console.log("i is not 10 but j is 20");
    } else {
        console.log("i is not 10 and j is not 20");
    }
}


```



#### 4. The switch Statement

The switch statement is used to execute a statement or a block of statements if a condition is true. The syntax of switch statement is as follows:

```javascript
switch (expression) {
    case value1:
        // code block 1
        break;
    case value2:
        // code block 2
        break;
    ...
    default:
        // code block n
}
```
```javascript
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day)
    break;
  case 1:
    day = "Monday";
    console.log(day)   
    break;
  case 2:
     day = "Tuesday";
     console.log(day)   
    break;
  case 3:
    day = "Wednesday";
    console.log(day)    
    break;
  case 4:
    day = "Thursday";
    console.log(day)    
    break;
  case 5:
    day = "Friday";
    console.log(day)    
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break

  default:
    console.log("Invalid day")    
}
```

### Questions!

```sh
# Conditional statements 
What is the difference between if, else if, and else statements in JavaScript?
How would you use the ternary operator to check if a number is even or odd?
Write a JavaScript function that uses conditional statements to check if a number is positive, negative, or zero.
Can you provide an example of using a switch statement to check for multiple conditions?
Explain how short-circuit evaluation works in JavaScript conditional statements.
Write a function that takes a string and returns "short" if its length is less than 5, "medium" if between 5 and 10, and "long" if more than 10.
How would you use the && and || operators to simplify multiple conditional checks?
What is the significance of the default case in a switch statement?

```
















