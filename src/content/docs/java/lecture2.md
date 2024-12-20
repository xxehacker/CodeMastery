---
title: Variables and Data Types in java !
description: a brief introduction of variables and data types in java
---

## 1. Variables and Data Types in java

### 1.1 Variables

Variables are used to store values in a program. They are the basic building blocks of any Java program. Variables are used to store data in a program, and they can be used to store different types of data.

Examples of variables :

```java

// Variable declaration
int age;
String name;
char gender;
boolean isMarried;

// Variable initialization
age = 22;
name = "Mridupawan Bordoloi";
gender = 'M';
isMarried = false;

// Variable declaration and initialization
int age = 22;
String name = "Mridupawan Bordoloi";
char gender = 'M';
boolean isMarried = false;
```


## 2 Data Types

Data types are used to define the type of data that a variable can store. There are two types of data types in Java:

1. Primitive Data Types
2. Non-Primitive Data Types

### 2.1 Primitive Data Types

Primitive data types are the most basic data types in Java. They are predefined by the language and are used to store simple values. There are eight primitive data types in Java:


1.	byte: 8-bit signed integer (1 byte)
2.	short: 16-bit signed integer (2 bytes)
3.	int: 32-bit signed integer (4 bytes)
4.	long: 64-bit signed integer (8 bytes)
5.	float: 32-bit floating-point number (4 bytes)
6.	double: 64-bit floating-point number (8 bytes)
7.	char: 16-bit Unicode character (2 bytes)
8.	boolean: true or false value (1 bit)

```sh
### 2.1.1 what is 8 bit signed integer ?
8-bit signed integer means that the integer can be either positive or negative and it can store 2^8 = 256 different values.
### 2.1.2 what is 16 bit signed integer ?
16-bit signed integer means that the integer can be either positive or negative and it can store 2^16 = 65536 different values.
### 2.1.3 what is 32 bit signed integer ?
32-bit signed integer means that the integer can be either positive or negative and it can store 2^32 = 4294967296 different values.
### 2.1.4 what is 64 bit signed integer ?
64-bit signed integer means that the integer can be either positive or negative and it can store 2^64 = 18446744073709552000 different values.
### 2.1.5 what is 1 byte ?
1 byte is equal to 8 bits.
### 2.1.6 what is 2 byte ?
2 byte is equal to 16 bits.
### 2.1.7 what is 4 byte ?
4 byte is equal to 32 bits.
### 2.1.8 what is 8 byte ?
8 byte is equal to 64 bits.
### 2.1.9 what is 1 bit ?
1 bit is equal to 1 binary digit. It can store 2^1 = 2 different values.
### 2.1.10 what is 2 bit ?
2 bit is equal to 2 binary digits. It can store 2^2 = 4 different values.

```

### 2.2 Code Examples
```java



// print , println , printf : support
// First way to do that

public class VariableAndDataTypes {

   public static void main(String[] args) {
       String name = "Mridupawan Bordoloi";
      // System.out.println :does not support format specifier
       System.out.println("Demo of String: " + name);
   }

}

// Second way to do that : %s : string , %n: newline
public class VariableAndDataTypes {

   public static void main(String[] args) {
       String name = "Mridupawan Bordoloi";
       System.out.printf("Demo of String: %s%n", name);
   }

}

// interger
public class VariableAndDataTypes {
   public static void main(String[] args) {
       int age = 22;
       // System.out.printf : support format specifier
       System.out.printf("Demo of Integer: %d%n", age);

       // Value update
       age = 23;
       System.out.printf("Demo of Integer: %d%n", age);
   }


//final variable : like const variable we can't change the value after declare
public class VariableAndDataTypes {
   public static void main(String[] args) {
       final int MAX_ATTEMPTS = 3;
       System.out.println("Maximum attempts: " + MAX_ATTEMPTS);
       MAX_ATTEMPTS = 5;
       System.out.println("Maximum attempts: " + MAX_ATTEMPTS);

   }
}
//cannot assign a value to final variable MAX_ATTEMPTS
// i got Error when i assign a new value to final variable


//One value to multiple variables
public class VariableAndDataTypes {
   public static void main(String[] args) {
       int x, y, z;
       x = y = z = 50;
       System.out.println("One value to multiple variables: " + (x+y+z));
   }
}

/*
Data types are divided into two groups:
Primitive data types - includes byte, short, int, long, float, double, boolean and char
Non-primitive data types - such as String, Arrays and Classes

*/

//Primitive data types
public class VariableAndDataTypes {
    public static void main(String[] args) {
        // Primitive data types examples
        byte byteVar = 100;             // 8-bit
        short shortVar = 1000;          // 16-bit
        int intVar = 10000;             // 32-bit
        long longVar = 100000L;         // 64-bit (note the 'L' at the end)
        float floatVar = 10.5f;         // 32-bit (note the 'f' at the end)
        double doubleVar = 20.99;       // 64-bit
        char charVar = 'A';             // 16-bit (holds a single character)
        boolean boolVar = true;         // 1-bit (holds true or false)

        // Printing the values
        System.out.println("byte: " + byteVar);
        System.out.println("short: " + shortVar);
        System.out.println("int: " + intVar);
        System.out.println("long: " + longVar);
        System.out.println("float: " + floatVar);
        System.out.println("double: " + doubleVar);
        System.out.println("char: " + charVar);
        System.out.println("boolean: " + boolVar);

    }
}
```

### 2.3 Non-Primitive Data Types

Non-primitive data types are dynamic data types. They are used to store complex data. Non-primitive data types are used to store data in a program, and they can be used to store different types of data. Types of Non-primitive data types are :

1. String
2. Array
3. Object
4. Class
5. Interface
6. Enum

### 2.4 Code Examples



```java

// String
public class VariableAndDataTypes {
   public static void main(String[] args) {
       String name = "Mridupawan Bordoloi";
       System.out.println("Demo of String: " + name);
   }
}


// Array
public class VariableAndDataTypes {
   public static void main(String[] args) {
       int[] numbers = {1, 2, 3, 4, 5};
       System.out.println("Demo of Array: " + numbers[0]);
   }
}


// Object

public class SimpleObjectExample {
    public static void main(String[] args) {
        // Creating an Object instance
        Object obj = new Object();
        // Displaying the object's information
        System.out.println("Object info: " + obj);
    }
}

// Class
class Car {          // This is a class
    String brand;    // Property
    int year;        // Property

    void displayInfo() {    // Method
        System.out.println("Brand: " + brand + ", Year: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car myCar = new Car();  // Object
        myCar.brand = "Toyota"; // Assigning values to the object's properties
        myCar.year = 2020;
        // Calling a method on the object
        myCar.displayInfo();  // Output: Brand: Toyota, Year: 2020
    }
}

// Interface
interface Animal {
    void makeSound(); // Interface method (does not have a body)
}

// Implementation: by second class
class Dog implements Animal {
    public void makeSound() {
        System.out.println("The dog says: bow wow");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an object of the Dog class
        Animal myAnimal = new Dog();  // Animal reference but Dog object
        myAnimal.makeSound();  // This will call the makeSound method in Dog class
    }
}

// Enum
enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}
public class Main {
    Day day;
    public Main(Day day) {
        this.day = day;
    }

    public void tellItLikeItIs() {
        switch (day) {
            case MONDAY:
                System.out.println("Mondays are bad.");
                break;
            case FRIDAY:
                System.out.println("Fridays are better.");
                break;
            case SATURDAY: case SUNDAY:
                System.out.println("Weekends are best.");
                break;
            default:
                System.out.println("Midweek days are so-so.");
                break;
        }
    }

    public static void main(String[] args) {
        Main firstDay = new Main(Day.MONDAY);
        firstDay.tellItLikeItIs();
        Main thirdDay = new Main(Day.WEDNESDAY);
        thirdDay.tellItLikeItIs();
        Main fifthDay = new Main(Day.FRIDAY);
        fifthDay.tellItLikeItIs();
        Main sixthDay = new Main(Day.SATURDAY);
        sixthDay.tellItLikeItIs();
        Main seventhDay = new Main(Day.SUNDAY);
        seventhDay.tellItLikeItIs();
    }
}

```

