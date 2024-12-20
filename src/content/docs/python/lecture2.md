---
title: Day 2 - Data Types and Type Casting
description: Details description of Data Types in Python
---

## Flowchart of Data Types

![Data Types](https://www.tutorialspoint.com/python/images/data_types.jpg)



## Data Types

1. **Integers**: Integers are used to store whole numbers.
2. **Floats**: Floats are used to store decimal numbers.
3. **Complex Numbers**: Complex numbers are used to store complex numbers.
4. **Strings**: Strings are used to store text.
5. **Booleans**: Booleans are used to store true or false values.
6. **Lists**: Lists are used to store multiple items in a single variable.
7. **Dictionaries**: Dictionaries are used to store key-value pairs.
8. **Tuples**: Tuples are used to store multiple items in a single variable.
9. **Sets**: Sets are used to store multiple items in a single variable.


### 1. Integers

Integers are used to store whole numbers.

```python
age = 20
print(age)
```

### 2. Floats

Floats are used to store decimal numbers.

```python
height = 1.75
print(height)
```

### 3. Complex Numbers

Complex numbers are used to store complex numbers.

```python
complex_number = 3 + 4j
print(complex_number)
```


### 4. Strings

Strings are used to store text.

```python
# example 1
name = "John"
print(name)

# example 2
name = 'John'
print(name)

# example 3 : Multiline String
name = """ hello my name is mridupawan , 
i am a student of MCA 2nd year ,
i love to code and learn new things
"""
print(name)
```



### 5. Booleans

Booleans are used to store true or false values.

```python
is_student = True
print(is_student)
```

### 6. Lists

Lists are used to store multiple items in a single variable.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits)
```

### 7. Dictionaries

Dictionaries are used to store key-value pairs.

```python
person = {"name": "John", "age": 20, "is_student": True}
print(person)
```

### 8. Tuples

Tuples are used to store multiple items in a single variable.

```python
coordinates = (10, 20)
print(coordinates)
```

### 9. Sets

Sets are used to store multiple items in a single variable.

```python
numbers = {1, 2, 3, 4, 5}
print(numbers)
```

## Type Casting

Casting is used to convert one data type to another data type.

```python
age = int(20)
print(age)

x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0 

print(x, y, z)

```

## How to check the type of a variable?

We can use the `type()` function to check the type of a variable.

```python
x = 5
print(type(x))
```