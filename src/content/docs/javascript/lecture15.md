---
title: Oops and Clases
description: A details description of Oops and Clases in JS
---

## Important Points

Classes were introduced in ECMAScript 6 (ES6) to offer a more intuitive way to create objects and implement OOP. A class is essentially a blueprint for creating objects. While JavaScript uses prototypes under the hood, classes provide a more familiar syntax for developers coming from languages like Java or C++.

OOP (Object-Oriented Programming) is a programming paradigm based on the concept of "objects." These objects can contain both data (in the form of fields or properties) and methods (in the form of functions) that operate on the data. OOP is designed to organize software in a way that models real-world entities and their interactions



## Oops and Clases

Oops stands for Object-Oriented Programming. It is a concept in programming that focuses on creating reusable and modular code by organizing it into objects and classes. Classes are used to define and create objects.

### What is a class?

A class is a blueprint for creating objects. It defines the properties and methods that an object of that class will have.

```javascript
class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}

const person1 = new Person("Mridupawan", 20, false);
console.log(person1);
```

### Constructor Function

A constructor function is a special function that is used to create and initialize an object. It is used to define the properties and methods that an object will have.

```javascript
class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }
}
```

### Constructor Function and Prototypes

Before classes were introduced, JavaScript developers used constructor functions to simulate OOP. Functions are used to define object blueprints, and the prototype allows shared properties and methods among instances.

```javascript
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} says ${this.sound}`);
};

const cat = new Animal("Cat", "Meow");
cat.speak(); // Cat says Meow
```

### Methods

A method is a function that is defined inside a class. It is used to perform operations on the object.

```javascript
class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Mridupawan", 20, false);
person1.greet();
```

### Inheritance

Inheritance is a mechanism in object-oriented programming where one class can inherit the properties and methods of another class.

```javascript
class Person {
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, age, isMarried, rollNo) {
    super(name, age, isMarried);
    this.rollNo = rollNo;
  }

  getRollNo() {
    console.log(`My roll number is ${this.rollNo}`);
  }
}

const person1 = new Person("Mridupawan", 20, false);
const student1 = new Student("Mridupawan", 20, false, 10);
person1.greet();
student1.getRollNo();
```

### Polymorphism

Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass.

```javascript
class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

const myDog = new Dog();
const myCat = new Cat();

myDog.speak(); // The dog barks
myCat.speak(); // The cat meows
```

### Encapsulation

Encapsulation is a concept in object-oriented programming that focuses on data hiding. It is used to restrict direct access to the properties and methods of an object.

```javascript
class Person {
  #ssn; // private field
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn; // accessible only within the class
  }

  getSSN() {
    return this.#ssn;
  }
}

const person = new Person("John", "123-45-6789");
console.log(person.getSSN()); // 123-45-6789
console.log(person.#ssn); // Error: Private field '#ssn' must be declared in an enclosing class
```

### Abstraction

Abstraction is a concept in object-oriented programming that focuses on simplifying complex code. It is used to hide the implementation details and only expose the essential features of an object. JavaScript doesn’t have built-in abstract classes like other languages, but you can simulate abstraction using base classes or interfaces through conventions.

```javascript
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  start() {
    throw new Error("Method start() must be implemented in subclass");
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.type} starts with an engine`);
  }
}

const myCar = new Car("Car");
myCar.start(); // Car starts with an engine
```

### Static Methods

Static methods are methods that belong to the class itself, not to instances of the class. They are called directly on the class and typically used for utility functions.

```javascript
class MathOperations {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathOperations.add(3, 5)); // 8
```
