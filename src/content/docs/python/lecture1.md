---
title: Day 1 - Introduction of Python and Variables
description: a description of python programming language
---

## 1. Introduction

### 1.1 What is Python?

Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python is widely used for web development, data analysis, artificial intelligence, scientific computing, and more.

### 1.2 Why Python?

1. **Readability**: Python code is designed to be easy to read and write, making it an excellent language for beginners.
2. **Versatility**: It can be used for web development, data analysis, artificial intelligence, scientific computing, and more.
3. **Community and Support**: Python has a large and active community, which means there is a wealth of resources and support available.
4. **Open Source**: Python is open source, which means it is free to use and modify.

## What can Python do?

1. **Web Development**: Python can be used to develop web applications.
2. **Data Analysis**: Python can be used to analyze data.
3. **Artificial Intelligence**: Python can be used to develop artificial intelligence applications.
4. **Scientific Computing**: Python can be used to develop scientific computing applications.
5. **System Scripting**: Python can be used to develop system scripting applications.


## First Python Program

```python
print("Hello, World!")
```


## Variables

Variables are used to store data in Python. They can be used to store numbers, strings, lists, dictionaries, and more.

```python
name = "John"
age = 20

print(name)
print(age)
``` 

## Legal variable names:

```python
myvar = "Mridu"
my_var = "Mridu"
_my_var = "Mridu"
myVar = "Mridu"
MYVAR = "Mridu"
myvar2 = "Mridu"
```

## Illegal variable names:
```python
2myvar = "Mridu"
my-var = "Mridu"
my var = "Mridu"
```

## Assign Multiple Values

```python
x, y, z = "Mridu", "John", "Doe"
print(x, y, z)
```

## One Value to Multiple Variables

```python
x = y = z = "Mridu"
print(x, y, z)
```

## Unpack a Collection

```python
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x, y, z)
```

## Local Variables 

Local variables are variables that are defined inside a function. They can only be used inside the function.

```python
def myfunc():
  x = "John"
  print(x)

myfunc()
```
## Global Variables
Global variables are variables that are defined outside a function. They can be used inside and outside the function.

```python
x = "Mridu"

def myfunc():
  print(x)

myfunc()
print(x)
```

## The global Keyword

The global keyword is used to declare a global variable.

```python
x = "Mridu"

def myfunc():
  global x
  x = "John"
  print(x)

myfunc()

print(x)
```
 
## Comments

Comments are used to explain the code. They are not executed by the Python interpreter.

```python
# This is a comment
print("Hello, World!")
```


