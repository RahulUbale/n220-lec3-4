/*
==================================================
   D.Function.js
   Everything About Functions in JavaScript
==================================================

📌 Introduction:
A function is a reusable block of code designed to perform a specific task.
It can take input (parameters), process it, and optionally return an output (return value).
Functions are one of the most important building blocks in JavaScript.
*/

// ==================================================
// 1. BASIC FUNCTION DECLARATION
// ==================================================

// A simple function with no parameters
function sayHello() {
    console.log("Hello, this is my first function!");
}
sayHello(); // Call the function


// ==================================================
// 2. FUNCTION WITH PARAMETERS
// ==================================================

// A function can accept inputs (parameters)
function greetUser(name) {
    console.log("Hello " + name + "!");
}
greetUser("Rahul");  // Pass "Rahul" as parameter
greetUser("Ivy");    // Reuse with another value


// ==================================================
// 3. FUNCTION WITH RETURN VALUE
// ==================================================

// Functions can return results instead of just printing
function add(a, b) {
    return a + b; // return sends value back to caller
}
let sum = add(5, 7); 
console.log("Sum of 5 and 7:", sum);


// ==================================================
// 4. FUNCTION EXPRESSIONS
// ==================================================

// A function can also be stored inside a variable
const multiply = function(x, y) {
    return x * y;
};
console.log("Multiplication 4 * 6:", multiply(4, 6));


// ==================================================
// 5. ARROW FUNCTIONS (Modern Syntax)
// ==================================================

// Arrow function: shorter way to write functions

// Normal form
const subtract = (a, b) => {
    return a - b;
};
console.log("Subtract 10 - 3:", subtract(10, 3));

// If only one line, we can remove braces and 'return'
const double = x => x * 2;
console.log("Double of 8:", double(8));


// ==================================================
// 6. DEFAULT PARAMETERS
// ==================================================

// Parameters can have default values if no argument is passed
function welcomeUser(name = "Guest") {
    console.log("Welcome, " + name + "!");
}
welcomeUser();        // Uses default "Guest"
welcomeUser("Rahul"); // Uses given argument


// ==================================================
// 7. FUNCTION SCOPE
// ==================================================

// Variables inside a function are local and cannot be used outside
let globalVar = "I am global";

function testScope() {
    let localVar = "I am local";
    console.log(globalVar); // accessible
    console.log(localVar);  // accessible here
}
testScope();
// console.log(localVar); // ❌ Error: localVar is not defined


// ==================================================
// 8. FUNCTIONS AS ARGUMENTS (CALLBACKS)
// ==================================================

// Functions can be passed as input to other functions
function doMath(operation, x, y) {
    return operation(x, y);
}
console.log("Callback add:", doMath(add, 2, 3));
console.log("Callback multiply:", doMath(multiply, 2, 3));


// ==================================================
// 9. NESTED FUNCTIONS
// ==================================================

function outerFunction() {
    console.log("I am the outer function");

    function innerFunction() {
        console.log("I am the inner function");
    }
    innerFunction(); // inner can be called inside outer
}
outerFunction();


// ==================================================
// 10. BEST PRACTICES
// ==================================================
/*
1. Always use meaningful names (calculateArea, not fn1).
2. Keep functions small and focused on one task.
3. Use return values instead of console.log where possible.
4. Prefer arrow functions for short one-line operations.
5. Reuse functions to avoid repeating code.
*/
