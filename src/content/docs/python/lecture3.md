---
title: Day 3 - Operators
description: Details description of Operators in Python
---

## Operators

Operators are used to perform operations on variables and values.

## list of operators :

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Identity Operators
6. Membership Operators


### 1. Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on variables and values.

```python
a = 10
b = 20
print(a + b) # addition
print(a - b) # subtraction
print(a * b) # multiplication
print(a / b) # division
print(a % b) # modulus
print(a // b) # floor division
print(a ** b) # exponentiation

```

### 2. Assignment Operators

Assignment operators are used to assign values to variables.

```python
a = 10
b = 20
a += b # a = a + b
a -= b # a = a - b
a *= b # a = a * b
a /= b # a = a / b
a %= b # a = a % b
a //= b # a = a // b
```

### 3. Comparison Operators

Comparison operators are used to compare two values.

```python
a = 10
b = 20
print(a == b) # equal
print(a != b) # not equal
print(a > b) # greater than
print(a < b) # less than
print(a >= b) # greater than or equal to
print(a <= b) # less than or equal to
```

### 4. Logical Operators

Logical operators are used to combine conditional statements.

```python
a = 10
b = 20
print(a and b) # and
print(a or b) # or
print(not a) # not

# example 1 : and operator
a = 10
b = 20
print(a and b) # output: 20

# example 2 : or operator
a = 10
b = 20
print(a or b) # output: 10

# example 3 : not operator
list1 = [1, 2, 3, 4, 5]
print(1 in list1) # output: True
print(6 not in list1) # output: True
print(not 1 in list1) # output: False : 1 is present in list1 so not 1 in list1 will be False
```

### 5. Identity Operators

Identity operators are used to compare the memory location of two objects.

```python
a = 10
b = 20
print(a is b) # output: False
print(a is not b) # output: True

# example 1 : is not operator
a = 10
b = 20
print(a is not b) # output: True

# example 2 : is operator
a = 10
b = 10
print(a is b) # output: True
```

### 6. Membership Operators

Membership operators are used to test if a value is present in a sequence (string, list, tuple, set, dictionary).

```python
a = 10
b = 20
print(a in b) # output: False
print(a not in b) # output: True

# example 2 : in operator
a = 10
b = [1, 2, 3, 4, 5]
print(a in b) # output: False

# example 3 : not in operator
a = 10
b = [1, 2, 3, 4, 5]
print(a not in b) # output: True
```








