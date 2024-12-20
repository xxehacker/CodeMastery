---
title: Operators in java !
description: a brief introduction of operators in java
---

## 1. Operators in java

Operators are used to perform operations on variables and values. They are used to perform different types of operations on variables and values. Types of Operators are :

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. Ternary Operators
7. instanceof Operator

### 1.1 Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on variables and values. They are used to perform different types of arithmetic operations on variables and values. Types of Arithmetic Operators are :

1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Increment (++)
7. Decrement (--)

#### 1.1.1 Code Example

```java


public class ArithmeticOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Addition 
        int sum = a + b;
        System.out.println("Sum: " + sum);

        // Subtraction
        int difference = a - b;
        System.out.println("Difference: " + difference);

        // Multiplication
        int product = a * b;
        System.out.println("Product: " + product);

        // Division
        int quotient = a / b;
        System.out.println("Quotient: " + quotient);

        // Modulus
        int modulus = a % b;
        System.out.println("Modulus: " + modulus);

        // Increment
        a++;
        System.out.println("Incremented a: " + a);

        // Decrement
        b--;
        System.out.println("Decremented b: " + b);
    }
}
```

### 1.2 Assignment Operators

Assignment operators are used to assign values to variables. They are used to assign different types of values to variables. Types of Assignment Operators are :

1. =
2. +=
3. -=
4. *=
5. /=
6. %=
7. &=
8. |=
9. ^=
10. '>>='
11. <<=




#### 1.2.1 Code Example 


```java

public class AssignmentOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        // Assignment
        int assignment = a;
        System.out.println("Assignment: " + assignment);
        // Addition Assignment
        a += b;
        System.out.println("After a += b: " + a);
        // Subtraction Assignment
        a -= b;
        System.out.println("After a -= b: " + a);
        // Multiplication Assignment
        a *= b;
        System.out.println("After a *= b: " + a);
        // Division Assignment
        a /= b;
        System.out.println("After a /= b: " + a);
        // Modulus Assignment
        a %= b;
        System.out.println("After a %= b: " + a);
        // Bitwise AND Assignment
        a &= b; // Equivalent to a = a & b;
        System.out.println("After a &= b: " + a); // 2
        // Bitwise OR Assignment
        a |= b; // Equivalent to a = a | b;
        System.out.println("After a |= b: " + a); // 3
        // Bitwise XOR Assignment
        a ^= b; // Equivalent to a = a ^ b;
        System.out.println("After a ^= b: " + a); // 1
        // Bitwise Shift Left Assignment
        a <<= b; // Equivalent to a = a << b;
        System.out.println("After a <<= b: " + a); // 2
        // Bitwise Shift Right Assignment
        a >>= b; // Equivalent to a = a >> b;
        System.out.println("After a >>= b: " + a); // 0

    }
}

```
### 3.3 Comparison Operators

Comparison operators are used to compare two values. They are used to compare different types of values. Types of Comparison Operators are :

1. ==
2. !=
3. >
4. <
5. >=
6. <=

#### 3.3.1 Code Example

```java

public class ComparisonOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // ==
        boolean isEqual = a == b;
        System.out.println("a == b: " + isEqual); // false
        // !=
        boolean isNotEqual = a != b;
        System.out.println("a != b: " + isNotEqual); // true
        // >
        boolean isGreater = a > b;
        System.out.println("a > b: " + isGreater); // true
        // <
        boolean isLess = a < b;
        System.out.println("a < b: " + isLess); // false
        // >=
        boolean isGreaterOrEqual = a >= b;
        System.out.println("a >= b: " + isGreaterOrEqual); // true
        // <=
        boolean isLessOrEqual = a <= b;
        System.out.println("a <= b: " + isLessOrEqual); // false
    }
}

```

### 3.4 Logical Operators

Logical operators are used to perform logical operations on variables and values. They are used to perform different types of logical operations on variables and values. Types of Logical Operators are :

1. &&
2. ||
3. !

#### 3.4.1 Code Example

```java

public class LogicalOperators {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        // &&
        boolean result1 = a && b;
        System.out.println("a && b: " + result1); // false
        // ||
        boolean result2 = a || b;
        System.out.println("a || b: " + result2); // true
        // !
        boolean result3 = !a;   
        System.out.println("!a: " + result3); // false
    }
}

```

### 3.5 Bitwise Operators

Bitwise operators are used to perform bitwise operations on variables and values. They are used to perform different types of bitwise operations on variables and values. Types of Bitwise Operators are :

1. &
2. |
3. ^
4. ~
5. <<
6. >>
7. >>>

#### 3.5.1 Code Example

```java

public class BitwiseOperators {
    public static void main(String[] args) {
        int a = 10; // 1010 in binary
        int b = 3; // 0011 in binary

        // &
        int result1 = a & b;
        System.out.println("a & b: " + result1); // 2
        // |
        int result2 = a | b;
        System.out.println("a | b: " + result2); // 11
        // ^
        int result3 = a ^ b;
        System.out.println("a ^ b: " + result3); // 9
        // ~
        int result4 = ~a;
        System.out.println("~a: " + result4); // -11
        // <<
        int result5 = a << b;
        System.out.println("a << b: " + result5); // 80
        // >>
        int result6 = a >> b;
        System.out.println("a >> b: " + result6); // 1
        // >>>
        int result7 = a >>> b;
        System.out.println("a >>> b: " + result7); // 1
    }
}

```




### 3.6 Ternary Operators

Ternary operators are used to perform ternary operations on variables and values. They are used to perform different types of ternary operations on variables and values. Types of Ternary Operators are :

1. ?:

#### 3.6.1 Code Example

```java

public class TernaryOperators {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Ternary Operator
        int result = a > b ? a : b;
        System.out.println("Result: " + result); // 10
    }
}

```

### 3.7 instanceof Operator

instanceof operator is used to check if an object is an instance of a class. They are used to check if an object is an instance of a class. Types of instanceof Operator are :

1. instanceof

#### 3.7.1 Code Example

```java

public class InstanceOfOperator {
    public static void main(String[] args) {
        String str = "Hello";
        boolean result = str instanceof String;
        System.out.println("str instanceof String: " + result); // true
    }
}

```

## More examples

```java

public class Operators {

    //    Java divides the operators into the following groups:
    //    Arithmetic operators : + - * / % ++ --
    public static void main(String[] args) {
        int x = 5;
        // ++ : increment
        ++x;
        System.out.println(x);
        // -- : decrement
        --x;
        System.out.println(x);

        exampleOfAssignmentOperator();

    }


//    Assignment operators: =,+=,-=,/=,%=,&=,|=,^=,>>=,<<=

    static void exmapleOfAssignmentOperator() {
        // Arithmetic Assignment Operators
        int a = 5;
        System.out.println("Original a: " + a);

        a += 3; // Equivalent to a = a + 3; a now equals 8
        System.out.println("After a += 3: " + a);

        a -= 3; // Equivalent to a = a - 3; a now equals 5
        System.out.println("After a -= 3: " + a);

        a *= 3; // Equivalent to a = a * 3; a now equals 15
        System.out.println("After a *= 3: " + a);

        a /= 3; // Equivalent to a = a / 3; a now equals 5
        System.out.println("After a /= 3: " + a);

        a %= 3; // Equivalent to a = a % 3; a now equals 2
        System.out.println("After a %= 3: " + a);

        // Bitwise Assignment Operators
        int b = 5; // 0101 in binary
        System.out.println("Original b: " + b);

        b &= 3;  // Equivalent to b = b & 3; b now equals 1 (0001 in binary)
        System.out.println("After b &= 3: " + b);

        b = 5; // Reset b to 5
        b |= 3;  // Equivalent to b = b | 3; b now equals 7 (0111 in binary)
        System.out.println("After b |= 3: " + b);

        b = 5; // Reset b to 5
        b ^= 3;  // Equivalent to b = b ^ 3; b now equals 6 (0110 in binary)
        System.out.println("After b ^= 3: " + b);

        b = 16; // 0001 0000 in binary
        b >>= 3; // Equivalent to b = b >> 3; b now equals 2 (0000 0010 in binary)
        System.out.println("After b >>= 3: " + b);

        b = 2; // Reset b to 2
        b <<= 3; // Equivalent to b = b << 3; b now equals 16 (0001 0000 in binary)
        System.out.println("After b <<= 3: " + b);
    }


//    Comparison operators : == , != , > , < , >= , >=
//    Logical operators : && , || , !
//    Bitwise operators
//    Ternary operators : ?:
//    instanceof operator : instanceof
}
```








