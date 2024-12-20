---
title: Introduction of java !
description: a brief introduction of java.
---

## 1. Introduction of java

Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but it has fewer low-level facilities than either of them.

## 1.1 Why java is important ?

1. Platform independent
2. Object-oriented
3. Secure
4. Distributed
5. Multithreaded
6. Interpreted
7. High Performance
8. Portable

## 1.2 What is java used for ?

1. Desktop applications
2. Mobile applications
3. Web applications
4. Web servers and application servers
5. Games
6. Database
7. Big data


## 1.3. Java compilation and interpretation

Java uses a combination of compilation and interpretation to execute code, and the process involves several steps:
1.	Compilation:
o	Java source code is initially written by developers in plain text files with a .java extension.
o	The Java compiler (javac) is used to translate this human-readable source code into an intermediate form known as bytecode. Bytecode is a low-level, platform-independent representation of the source code.
2.	Bytecode:
o	The bytecode generated by the Java compiler is stored in .class files, which are also text files but contain binary data that represents the bytecode instructions.
o	Bytecode is not tied to any specific computer architecture or operating system. This bytecode is portable and can be executed on any platform that has a Java Virtual Machine (JVM) installed.
3.	Interpretation:
o	When you run a Java program, the Java Virtual Machine (JVM) comes into play. The JVM is responsible for executing Java bytecode.
o	The JVM reads the bytecode instructions one by one and translates them into machine code specific to the host system (e.g., x86 machine code on a Windows PC, ARM machine code on an Android device, etc.).
o	This translation happens on-the-fly as the program is running, and it's often referred to as interpretation or just-in-time (JIT) compilation.
So, in summary, Java is compiled in the sense that it translates source code into bytecode at compile time, but it is also interpreted at runtime by the JVM, which converts bytecode into machine code for the specific hardware it is running on. This combination of compilation and interpretation gives Java its platform independence and the ability to "write once, run anywhere" as long as there is a compatible JVM for the target platform. "Write once, run anywhere" is a fundamental principle of Java's design, and it refers to Java's platform independence and portability. This concept highlights the idea that you can write your Java code once, and it should be able to run on any platform or operating system without modification, as long as a Java Virtual Machine (JVM) is available for that platform.
JDK, or Java Development Kit, is a software package provided by Oracle (formerly Sun Microsystems) that includes a set of tools and utilities for developing Java applications. The JDK is essential for Java software development because it contains everything you need to write, compile, debug, and run Java code. Here are some key components and features of the JDK:
1.	Java Compiler (javac): The JDK includes the Java compiler (javac), which is used to compile Java source code (files with a .java extension) into bytecode (files with a .class extension). This bytecode can be executed by the Java Virtual Machine (JVM) on various platforms.
2.	Java Runtime Environment (JRE): The JDK includes a copy of the JRE, which is required for running Java applications on your development machine. The JRE contains the JVM and essential runtime libraries.

### Code

```java
// First Day of Java Learning Journey
// Out : Output , println : print line


/* This is multiline comment */

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
        System.out.println(10+20);

        System.out.print("Hello World! ");
        System.out.print("I will print on the same line.");
    }

}

```























