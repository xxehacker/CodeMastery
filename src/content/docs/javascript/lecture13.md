---
title: Date and Math Object in JavaScript
description: A details description of Date and Math Object in JavaScript
---

## Date Object

Date object is used to represent a date and time.

## Creating Date Object

```javascript
let today = new Date();
console.log(today);
```

## Methods of Date object

```javascript
1. 	getDate()

Returns the day of the month for the specified date according to local time.
2. 	getDay()

Returns the day of the week for the specified date according to local time.
3. 	getFullYear()

Returns the year of the specified date according to local time.
4. 	getHours()

Returns the hour in the specified date according to local time.
5. 	getMilliseconds()

Returns the milliseconds in the specified date according to local time.
6. 	getMinutes()

Returns the minutes in the specified date according to local time.
7. 	getMonth()

Returns the month in the specified date according to local time.
8.	getSeconds()

Returns the seconds in the specified date according to local time.
9.	getTime()

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.
10. getTimezoneOffset()

Returns the time-zone offset in minutes for the current locale.
11. getUTCDate()

Returns the day (date) of the month in the specified date according to universal time.
12. getUTCDay()

Returns the day of the week in the specified date according to universal time.
13. getUTCFullYear()

Returns the year in the specified date according to universal time.
14. getUTCHours()

Returns the hours in the specified date according to universal time.
15. getUTCMilliseconds()

Returns the milliseconds in the specified date according to universal time.
16. getUTCMinutes()

Returns the minutes in the specified date according to universal time.
17. getUTCMonth()

Returns the month in the specified date according to universal time.
18. getUTCSeconds()

Returns the seconds in the specified date according to universal time.
19. setDate()

Sets the day of the month for a specified date according to local time.
20. setFullYear()

Sets the full year for a specified date according to local time.
21. setHours()

Sets the hours for a specified date according to local time.
22. setMilliseconds()

Sets the milliseconds for a specified date according to local time.
23. setMinutes()

Sets the minutes for a specified date according to local time.
24. setMonth()

Sets the month for a specified date according to local time.
25. setSeconds()

Sets the seconds for a specified date according to local time.
26. setTime()

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
27. setUTCDate()

Sets the day of the month for a specified date according to universal time.
28. setUTCFullYear()

Sets the full year for a specified date according to universal time.
29. setUTCHours()

Sets the hour for a specified date according to universal time.
30. setUTCMilliseconds()

Sets the milliseconds for a specified date according to universal time.
31. setUTCMinutes()

Sets the minutes for a specified date according to universal time.
32. setUTCMonth()

Sets the month for a specified date according to universal time.
33. setUTCSeconds()

Sets the seconds for a specified date according to universal time.
34. toDateString()

Returns the "date" portion of the Date as a human-readable string.
35. toISOString()

Returns date string in the ISO format.
36. toLocaleDateString()

Returns the "date" portion of the Date as a string, using the current locale's conventions.
37. toJSON()

Converts a date to a string.
38. toLocaleString()

Converts a date to a string, using the current locale's conventions.
39. toLocaleTimeString()

Returns the "time" portion of the Date as a string, using the current locale's conventions.
40. toString()

Returns a string representing the specified Date object.
41. toTimeString()

Returns the "time" portion of the Date as a human-readable string.
42.	toUTCString()

Converts a date to a string, using the universal time convention.
43.	valueOf()

Returns the primitive value of a Date object.
```

## Examples of Popular Methods of Date object

```javascript
let today = new Date();
console.log(today);

const date = new Date("Oct 04, 2024 01:30:54 AM");
console.log(date);

let date1 = new Date();
console.log(date1.toDateString()); //Fri Oct 04 2024
console.log(date1.toTimeString()); // 01:37:18 GMT+0530 (India Standard Time)
console.log(date1.toISOString()); // 2024-10-03T20:07:18.241Z
console.log(date1.toJSON()); // 2024-10-03T20:07:18.241Z
console.log(date1.toLocaleDateString()); // 4/10/2024
console.log(date1.toLocaleTimeString()); // 1:37:18 AM
console.log(date1.toLocaleString()); // 4/10/2024, 1:37:18 AM
console.log(date1.toString()); // Fri Oct 04 2024 01:37:18 GMT+0530 (India Standard Time)

console.log(date1.getTime()); // 1633291778241
console.log(date1.getTimezoneOffset()); // 330
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getMilliseconds()); // 241
console.log(date1.getDay()); // 4
console.log(date1.getMonth()); // 10
console.log(date1.getFullYear()); // 2024

console.log(Date.now()); // 1633291778241
console.log(Date.parse("2024-10-03T20:07:18.241Z")); // 1633291778241
console.log(date1.setTime(1633291778241));
```

## Math Object

Math object is used to perform mathematical operations. The JavaScript math object provides properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor. All the properties and methods of Math are static and can be called by using Math as an object without creating it.

## Creating Math Object

```javascript
let math = Math;
console.log(math);

or;

// The error occurs because Math is not a constructor in JavaScript. The Math object is a built-in object with properties and methods for mathematical constants and functions, but you cannot instantiate it using new. It's simply used as is, without creating an instance.
let math = new Math();
console.log(math); // Error:  Math is not a constructor

// Right way to use Math object
console.log(Math.PI); // Outputs: 3.141592653589793
console.log(Math.sqrt(16)); // Outputs: 4
```

## Methods of Math object

```javascript

1. abs()

Returns the absolute value of a number.
2. acos()

Returns the arccosine (in radians) of a number.
3. acosh()

Returns the inverse hyperbolic consine of a number.
4. asin()

Returns the arcsine (in radians) of a number.
5. asinh()

Returns the inverse hyperbolic sine of a number.
6. atan()

Returns the arctangent (in radians) of a number.
7. atan2()

Returns the arctangent of the quotient of its arguments.
8. atanh()

Returns the inverse hyperbolic tangent of a number.
9. cbrt()

Finds a cube root of a given number.
10. ceil()

Returns the smallest integer greater than or equal to a number.
11. clz32()

Returns the number of leading zero in 32-bit binary number.
12. cos()

Returns the cosine of a number.
13. cosh()

It returns the hyperbolic cosine of a number.
14. exp()

Returns EN, where N is the argument, and E is Euler's constant, the base of the natural logarithm.
15. expm1()

Returns EN - 1, where N is the argument, and E is Euler's constant, the base of the natural logarithm.
16. floor()

Returns the largest integer less than or equal to a number.
17. fround()

Returns a nearest 32-bit single precision float representation of the number.
18. hypot()

Calculates the square root of the sum of squares of arguments.
19. imul()

Calculates the 32-bit multiplication of parameters.
20. log()

Returns the natural logarithm (base E) of a number.
21. log10()

Returns the logarithm (base 10) of a number.
22. log1p()

Return the natural logarithm (base E) of 1 + N, where N is an argument.
23. log2()

Returns the base 2 logrithm of a number.
24. max()

Returns the largest of zero or more numbers.
25. min()

Returns the smallest of zero or more numbers.
26. pow()

Returns base to the exponent power that is, base exponent.
27. random()

Returns a pseudo-random number between 0 and 1.
28. round()

Returns the value of a number rounded to the nearest integer.
29. sign()

Return -1 or 1 indicating the sign of the number.
30. sin()

Returns the sine of a number.
31. sinh()

Return the hyperbolic sin.
32. sqrt()

Returns the square root of a number.
33. tan()

Returns the tangent of a number.
34. tanh()

Returns the hyperbolic tangent of the number.
35. trunc()

Returns the integer part of the number.

```

## Examples of Popular Methods of Math 

```javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.random()); // 0.123456789
console.log(Math.ceil(10.5)); // 11
console.log(Math.floor(10.5)); // 10
console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10
console.log(Math.pow(2, 3)); // 8
console.log(Math.round(10.5)); // 11
console.log(Math.sin(0.5)); // 0.479425538604203
console.log(Math.sqrt(4)); // 2
console.log(Math.trunc(10.5)); // 10
```
