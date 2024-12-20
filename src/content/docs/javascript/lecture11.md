---
title: Objects and Its Methods
description: A details description of objects and its methods in js
---

## Objects

Objects are collection of key-value pairs.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};
```

## Different ways to create objects in JavaScript

1. Object Literal
2. Object Constructor
3. Constructor Function
4. Object.create()
5. Object.assign()
6. Factory Functions
7. Singleton Pattern

## Object Literal : 

The simplest way to create an object is by using object literals.

```javascript
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

```

## Object Constructor

You can also create objects using the Object() constructor.

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.greet = function() {
    console.log("Hello, " + this.name);
};

```

## Constructor Function

You can define a function that acts as a blueprint for creating objects.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, " + this.name);
    };
}

const john = new Person("John", 30);

```

## Prototype

Prototype is a property of a constructor function that is used to add new properties and methods to an object.

```javascript
function Person(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person("John", 20, false);
person1.sayHello();
```

## Object.create()

Object.create() is used to create a new object with a specified prototype object and properties.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const person1 = Object.create(person);
console.log(person1);
```

## Object.assign()

Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const person1 = Object.assign({}, person);
console.log(person1);
```

## Factory Functions 

Factory functions are functions that return a new object.

```javascript
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log("Hello, " + this.name);
        }
    };
}

const john = createPerson("John", 30);

```

## Singleton Pattern : 

A singleton is an object that can only be instantiated once.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const person1 = new person();
console.log(person1);
```



## Methods of objects

1. Object.entries()
2. Object.fromEntries()
3. Object.keys()
4. Object.values()
5. Object.freeze()

## Object.entries()

Object.entries() is used to return an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const entries = Object.entries(person);
console.log(entries);
```

## Object.fromEntries()

Object.fromEntries() is used to return a new object from an array of `[key, value]` pairs.

```javascript
const entries = [["name", "John"], ["age", 20], ["isMarried", false]];
const person = Object.fromEntries(entries);
console.log(person);
```

## Object.keys()

Object.keys() is used to return an array of a given object's own enumerable property names.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const keys = Object.keys(person);
console.log(keys);
```

## Object.values()

Object.values() is used to return an array of a given object's own enumerable property values.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const values = Object.values(person);
console.log(values);
```
## Object.freeze()

Object.freeze() is used to freeze an object, making it immutable.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

Object.freeze(person);

person.name = "Jane";
console.log(person);
```



## Iterating over objects

1. for...in loop
2. Object.keys()
3. Object.values()
4. Object.entries()

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

for (const key in person) {
    console.log(key, person[key]);
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
```

## Accessing Object Members

1. Dot Notation
2. Bracket Notation

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

console.log(person.name);
console.log(person["age"]);
```

## Adding and Removing Properties

1. Adding Properties
2. Removing Properties

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

person.gender = "male";
console.log(person);

delete person.age;
console.log(person);
```

## Checking if a property exists

1. in operator
2. hasOwnProperty()

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

console.log("name" in person);
console.log(person.hasOwnProperty("name"));
```

## Property Descriptors

Property descriptors are used to describe the properties of an object.

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
```

## Object destructuring

```javascript
const person = {
    name: "John",
    age: 20,
    isMarried: false
};

const { name, age, isMarried } = person;
```

## Use Spread Operator to Merge Objects 

```javascript
const person1 = {
    name1: "Mridu",
    age1: 20,
    isMarried1: false
};

const person2 = {
    name2: "John",
    age2: 40,
    isMarried2: true
};

const person3 = {
    name3: "Bordoloi",
    age3: 25,
    isMarried3: false
}

const newPerson = { ...person1,...person2 , ...person3};
console.log(newPerson);

```

## Use Rest Operator 

```javascript

function myFunction(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

myFunction(1, 2, {name:"mridu",
age:25
});

```

## Examples of real live use cases of object

1. 
```javascript

const users = [
    {
        id: 1,
        email: "mridu@gmail.com"
    },
    {
        id: 2,
        email: "xxehacker@gmail.com"
    },
    {
        id: 3,
        email: "helloworld@gmail.com"
    },
]
 
console.log(users[0]); // output: { id: 1, email: 'mridu@gmail.com' }
console.log(users[1].email);  // output: 'xxehacker@gmail.com'

```
2. 

```javascript
let bio = {
    fullname: "Mridupawan Bordoloi",
    age: 30,
    isMarried: false
};

const {fullname : name } = bio
console.log(name)

# Object Destructuring: The syntax const { name: Myname } = bio; is an example of destructuring assignment, where we take the name property from the bio object and assign it to a new variable Myname.
```




# Questions !

```sh
1. Create a function to add properties to an object dynamically.
2. Create a function to remove properties from an object dynamically.
3. Create a function to update properties of an object dynamically.
4. Create a function to check if a property exists in an object.
5. Create a function to get the value of a property.
6. Create a function to set the value of a property.
7. Create a function to delete a property from an object.
8. Create a function to check if a property exists in an object.
```




