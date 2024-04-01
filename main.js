"use strict";
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function roundToNearestInteger(num) {
    return Math.round(num);
}
console.log(roundToNearestInteger(5.7));
console.log(roundToNearestInteger(5.4));
console.log("\n");
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
function convertStringToNumber(str) {
    return parseFloat(str);
}
console.log(convertStringToNumber("123.45"));
console.log(convertStringToNumber("2015"));
console.log("\n");
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
function isValueNaN(value) {
    return isNaN(value);
}
console.log(isValueNaN("Zohaib"));
console.log(isValueNaN(123));
