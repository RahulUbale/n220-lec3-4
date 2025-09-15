// // =========================
// // JavaScript Variables
// // =========================
// //
// // Variables are containers for values. They allow us to store, reuse,
// // and update data in our programs.
// //
// // Modern JavaScript provides three ways to declare variables:
// // - var   (old, function-scoped, avoid for new code)
// // - let   (block-scoped, reassignable)
// // - const (block-scoped, cannot be reassigned)
// //
// // Use let and const in modern code. Use const when you do not plan to reassign.


// // // Example: using var (older way, less safe)
// // var oldSchool = 10;
// // console.log(oldSchool); // Output: 10


// // // Example: using let (preferred for values that change)
// // let score = 50;
// // score = 75; // reassigned
// // console.log(score); // Output: 75

// // // Example: using const (preferred for values that never change)
// // const PI = 3.14159;
// // PI = 3.2; // ❌ Error: Assignment to constant variable
// // console.log(PI); // Output: 3.14159



// // =========================
// // Variable Naming Rules
// // =========================
// //
// // ✅ Rules for valid variable names:
// // 1. Must start with a letter, underscore (_), or dollar sign ($).
// // 2. After the first character, you can use letters, numbers, underscores, or dollar signs.
// // 3. Cannot use reserved keywords (like "class", "function", "let", etc).
// // 4. Case-sensitive: myVar, MyVar, and myvar are DIFFERENT.


// let $let = 5; //

// // Example: valid names
// let camelCase= "common style in JavaScript"; // ✅ preferred
// let dinner2Go = "pizza";                      // ✅ numbers allowed after first char
// let I_AM_HUNGRY = true;      
// let i_Am_hungry = false;                       // ✅ uppercase and underscores work
// let _Hello_ = "greeting";                     // ✅ underscore is fine
// let $_$ = "money eyes";                       // ✅ dollar sign allowed

// console.log(camelCase + " " + dinner2Go + " " + I_AM_HUNGRY + " " + _Hello_ + " " + $_$);



// Example: invalid names (will cause errors if uncommented)
// let total% = 78;      // ❌ % is not allowed
// let 2fast2catch = 99; // ❌ cannot start with a number
// let function = false; // ❌ reserved keyword
// let class = "oops";   // ❌ reserved keyword



// =========================
// Best Practices for Naming
// =========================
//
// 1. Use camelCase for variables (example: userAge, totalScore).
// 2. Use descriptive names instead of short unclear ones.
//    Example: let userAge = 25; ✅   let x = 25; ❌
// 3. Use ALL_CAPS for constants that never change.
//    Example: const MAX_USERS = 100;
// 4. Avoid similar-looking names like "data", "Data", and "dAta".

// const MAX_USERS = 100;
// console.log("Max users allowed:", MAX_USERS);



// =========================
// JavaScript Strings
// =========================
//
// Strings in JavaScript are values made up of text and can contain
// letters, numbers, symbols, punctuation, and even emojis!
//
// Example:
// 'This is a string. 👏'
// "This is the 2nd string. 💁"



// // =========================
// // Single and Double Quotes
// // =========================
// //
// // Strings can be written using either single ('') or double ("") quotes.
// // Just make sure to open and close with the SAME type of quote.
// //
// // Example:
// let str1 = 'This is a string. 👏';
// let str2 = "This is the 2nd string. 💁";

// console.log(str1); // Output: This is a string. 👏
// console.log(str2); // Output: This is the 2nd string. 💁



// =========================
// Enclosing Quotation Marks
// =========================
//
// If your string contains single quotes, wrap the string with double quotes.
// If your string contains double quotes, wrap with single quotes.
//
// Example:
let quote1 = "It's six o'clock.";
let quote2 = 'Remember to say "please" and "thank you."';

console.log(quote1); // Output: It's six o'clock.
console.log(quote2); // Output: Remember to say "please" and "thank you."



// =========================
// Escaping Quotes with Backslash (\)
// =========================
//
// Another way is to use the backslash to escape quotes.
//
// Example:
// let escape1 = 'It\'s six o\'clock.';
// let escape2 = "Remember to say \"please\" and \"thank you.\"";

// console.log(escape1); // Output: It's six o'clock.
// console.log(escape2); // Output: Remember to say "please" and "thank you."



// =========================
// String Length Property
// =========================
//
// .length tells you how many characters are inside the string.
//
// Example:
let word1 = "caterpillar";
console.log(word1.length); // Output: 11



// =========================
// Changing Case
// =========================
//
// toLowerCase() → converts all letters in the string to lowercase.
// toUpperCase() → converts all letters in the string to uppercase.
//
// Example:
// let kids = "THE KIDS";
// console.log(kids.toLowerCase()); // Output: the kids

// let wish = "I wish I were big.";
// console.log(wish.toUpperCase()); // Output: I WISH I WERE BIG.



// // =========================
// // trim() Method
// // =========================
// //
// // Removes whitespace ONLY from the beginning and end of the string.
// //
// // Example:
// let spaced = "   but keep the middle spaces   ";
// console.log(spaced.trim()); // Output: but keep the middle spaces



// // =========================
// // Accessing Characters
// // =========================
// //
// // You can access characters by index: string[index]
// // charAt(index) → returns the character at a given index
// // charCodeAt(index) → returns the Unicode number at that index
// //
// // Example:
// let greeting = "Hello";
// console.log(greeting[1]);         // Output: e
// console.log(greeting.charAt(1));  // Output: e
// console.log(greeting.charCodeAt(1)); // Output: 101



// // =========================
// // Extracting Parts of a String
// // =========================
// //
// // slice(start, end) → extracts part of string (end not included)
// // substring(start, end) → similar to slice (no negative indices support)
// // substr(start, length) → extracts given length (older, but seen in code)
// //
// // Examples:
// let phrase = "JavaScript";
// console.log(phrase.slice(0, 4));     // Output: Java
// console.log(phrase.substring(4, 10));// Output: Script
// console.log(phrase.substr(4, 6));    // Output: Script



// // =========================
// // Searching Inside Strings
// // =========================
// //
// // indexOf(value) → first occurrence (or -1 if not found)
// // lastIndexOf(value) → last occurrence
// // includes(value) → true/false if found
// // startsWith(value) → true/false if starts with value
// // endsWith(value) → true/false if ends with value
// //
// // Examples:
// let sentence = "I love JavaScript because JavaScript is powerful!";
// console.log(sentence.indexOf("JavaScript"));    // Output: 7




// console.log(sentence.lastIndexOf("JavaScript"));// Output: 24
// console.log(sentence.includes("powerful"));     // Output: true
// console.log(sentence.startsWith("I love"));     // Output: true
// console.log(sentence.endsWith("!"));            // Output: true



// // =========================
// // Replacing & Repeating Strings
// // =========================
// //
// // replace(search, value) → replaces first match (string or regex)
// // replaceAll(search, value) → replaces all matches (ES2021+)
// // repeat(count) → repeats string multiple times
// //
// // Examples:
// let msg = "Hello World, Hello Universe!";
// console.log(msg.replace("Hello", "Hi"));      // Output: Hi World, Hello Universe!
// console.log(msg.replaceAll("Hello", "Hi"));   // Output: Hi World, Hi Universe!
// console.log("Ha!".repeat(3));                 // Output: Ha!Ha!Ha!



//  // =========================
//  // Splitting & Concatenating
//  // =========================
//  //
//  // split(separator) → converts string into array
//  // concat() → joins multiple strings
//  //
//  // Examples:
// let csv = "apple,banana,cherry";
// console.log(csv.split(",")); // Output: ["apple","banana","cherry"]


// let s1 = "Hello";
// let s2 = "World";
// console.log(s1.concat(" ", s2)); // Output: Hello World



// // =========================
// // Template Literals
// // =========================
// //
// // Backticks ` ` allow interpolation with ${} and multi-line strings.
// //
// // Template literals are literals delimited with backtick (`) characters, 
// // allowing for multi-line strings, string interpolation with embedded expressions, and 
// // special constructs called tagged templates.

// // Template literals are sometimes informally called template strings, 
// // because they are used most commonly for string interpolation 
// // (to create strings by doing substitution of placeholders). 
// // However, a tagged template literal may not result in a string; 
// // it can be used with a custom tag function to perform whatever operations 
// // you want on the different parts of the template literal.
// // Example:
// let firstName = "Rahul";
// let lastName = "U.";
// console.log(`Hello ${firstName} ${lastName},welcome!`); // Output: Hello Rahul U., welcome!



// // =========================
// // JavaScript Numbers
// // =========================
// //
// // Numbers in JavaScript are values that can be used in
// // mathematical operations. No quotes needed — just write them.
// //
// // Example:

// let whole = 10;
// let pi = 3.14159;
// console.log(whole + pi); // Output: 13.14159



// // =========================
// // Fractions, Improper, Mixed
// // =========================
// //
// // Fractions are just division operations.
// // Mixed numbers can be written using parentheses.
// //
// // Examples:
// let fraction = 1/3;
// console.log(fraction); // Output: 0.3333333333333333

// let improper = 11 / 10;
// console.log(improper); // Output: 1.1

// let mixed = 1 + (4 / 3);
// console.log(mixed); // Output: 2.3333333333333335



// // =========================
// // Negative Numbers
// // =========================
// //
// // Create negative numbers with a leading minus sign.
// //
// let negative = -3;
// console.log(negative); // Output: -3

// let subtract = 5 - 7;
// console.log(subtract); // Output: -2


// // =========================
// // Special Number Values
// // =========================
// //
// // NaN → Not a Number (invalid math)
// // Infinity → result of division by zero or overflow
// //
// // Example:
// console.log(0 / 0);      // Output: NaN
// console.log(5 / 0);      // Output: Infinity
// console.log(-5 / 0);     // Output: -Infinity



// =========================
// Math Object
// =========================


// 📐 Mathematical Functions in JavaScript
// -------------------------------------------------------
// We already learned about basic arithmetic operators (+, -, *, /, %).
// Now let's explore built-in Math functions in JavaScript that help us 
// perform advanced calculations easily. These are very useful 
// for assignments like Interest Rate Calculator. 🚀

// 🔹 Math.pow(base, exponent)
// This raises a number (base) to the power of exponent.
console.log(Math.pow(2, 3)); // 8 → (2³ = 8)

// 🔹 Exponentiation operator (**)
// Newer shortcut way to do the same thing as Math.pow.
console.log(2 ** 3); // 8 → same as above

// 🔹 Math.sqrt(number)
// Returns the square root of a number.
console.log(Math.sqrt(25)); // 5

// 🔹 Math.abs(number)
// Returns the absolute value (removes negative sign).
console.log(Math.abs(-10)); // 10

// 🔹 Math.round(number)
// Rounds a decimal number to the nearest integer.
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// 🔹 Math.ceil(number)
// Rounds a decimal number UP to the nearest integer.
console.log(Math.ceil(4.1)); // 5

// 🔹 Math.floor(number)
// Rounds a decimal number DOWN to the nearest integer.
console.log(Math.floor(4.9)); // 4

// 🔹 Math.max(a, b, c...)
// Finds the maximum number from the given values.
console.log(Math.max(3, 7, 2, 9)); // 9

// 🔹 Math.min(a, b, c...)
// Finds the minimum number from the given values.
console.log(Math.min(3, 7, 2, 9)); // 2

// 🔹 Math.random()
// Generates a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); // e.g., 0.3456

// 🔹 Math.trunc(number)
// Removes the decimal part, keeps only the integer.
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

// 🔹 toFixed(n)
// This is not part of Math, but very important for formatting numbers.
// It converts a number into a string, keeping only n decimal places.
let value = 12.34567;
console.log(value.toFixed(1)); // "12.35"





// // =========================
// // Converting Strings to Numbers
// // =========================
// //
// // IMPORTANT: Values entered by the user in <input> fields or using prompt()
// // are always STRINGS in JavaScript, even if they look like numbers.
// // To do math correctly, we need to CONVERT them into numbers.
// //
// // Example:
// let strNumber = "42";   // this is a string, not a number!
// console.log(strNumber + 5); // Output: "425" (string + number = string)

// // We must convert before doing math 👇








// // =========================
// // parseInt()
// // =========================
// //
// // parseInt() converts a string into a WHOLE NUMBER (integer).
// //
// // Example:
// let num1 = parseInt("42");
// console.log(num1 + 5); // Output: 47

// // If the string has decimals, parseInt() removes the decimal part:
// let num2 = parseInt("3.99");
// console.log(num2); // Output: 3

// // If the string starts with text, parseInt() gives NaN (Not a Number):
// let num3 = parseInt("hello123");
// console.log(num3); // Output: NaN






// // =========================
// // parseFloat()
// // =========================
// //
// // parseFloat() converts a string into a DECIMAL number (floating point).
// //
// // Example:
// let num4 = parseFloat("3.99");
// console.log(num4); // Output: 3.99

// // Works the same as parseInt but keeps the decimal part:
// let num5 = parseFloat("10.75");
// console.log(num5 + 2); 


// // =========================
// // Number()
// // =========================
// //
// // Number() is another way to convert strings into numbers.
// // It works for both integers and decimals.
// //
// // Example:
// let num6 = Number("42");
// let num7 = Number("3.14");

// console.log(num6); 
// console.log(num7); 


// let num8 = Number("hello");
// console.log(num8); 



// // =========================
// // Why Conversion Matters
// // =========================
// //
// // If user enters values in <input> boxes, they arrive as strings.
// // Without conversion, math will produce wrong results!
// //
// // Example:
// let value1 = "10";  // from input field
// let value2 = "5";   // from input field

// console.log(value1 + value2);          
// console.log(Number(value1) + Number(value2)); 





// // =========================
// // JavaScript Booleans
// // =========================
// //
// // Booleans are values that can only be TRUE or FALSE.
// // They answer yes/no questions in your program.
// //
// // Example:
// let kitchenLights = false; // lights are off
// console.log(kitchenLights); // Output: false

// // Turn the lights on
// kitchenLights = true;
// console.log(kitchenLights); // Output: true



// // =========================
// // Why Booleans Are Useful
// // =========================
// //
// // They are commonly used in conditions (if/else).
// // Example of a sandwich-making thought process:
// //
// // Do I have bread? TRUE or FALSE
// // If TRUE, continue. If FALSE, stop and go to the store.

// let hasBread = true;
// let hasHam = false;

// if (hasBread && hasHam) {
//     console.log("You can make a ham sandwich!");
// } else {
//     console.log("Sandwich cannot be made.");
// }
// // Output: Sandwich cannot be made.



// // =========================
// // Boolean with Expressions
// // =========================
// //
// // Any expression in JavaScript can be converted to TRUE or FALSE.
// // Example: comparisons
// console.log(5 > 3);  // Output: true
// console.log(2 === 4); // Output: false




// // =========================
// // JavaScript Operators
// // =========================
// //
// // Operators are symbols that perform actions on values.
// // Let's explore the most commonly used operators in JavaScript.


// // =========================
// // Arithmetic Operators
// // =========================
// //
// // + (addition), - (subtraction), * (multiplication), / (division)
// //
// // Example: Addition
// let sum = 1 + 2;
// console.log(sum); // Output: 3

// // Example: Subtraction
// let difference = 50 - 15;
// console.log(difference); // Output: 35

// // Example: Multiplication (* is used, not ×)
// let product = 3 * 12;
// console.log(product); // Output: 36

// // Example: Division (/ is used, not ÷)
// let quotient = 12 / 4;
// console.log(quotient); // Output: 3



// // =========================
// // Order of Operations
// // =========================
// //
// // Just like in math, JavaScript respects operator precedence.
// // Multiplication (*) happens before addition (+).
// //
// // Example:
// let expr1 = 1 + 100 * 5;
// console.log(expr1); // Output: 501 (100*5=500, then +1)



// // =========================
// // Grouping with Parentheses
// // =========================
// //
// // Use () to control the order of operations.
// // Inside parentheses is evaluated first.
// //
// // Example:
// let expr2 = (1 + 100) * 5;
// console.log(expr2); // Output: 505



// // =========================
// // String Concatenation
// // =========================
// //
// // + is also used to join (concatenate) strings.
// // This is unique to JavaScript and often confuses beginners.
// //
// // Example:
// let word = "news" + "paper";
// console.log(word); // Output: newspaper



// // =========================
// // Assignment Operator
// // =========================
// //
// // = assigns a value to a variable.
// //
// // Example:
// let dinner = "sushi";
// console.log(dinner); // Output: sushi



// // =========================
// // Bonus: Compound Assignment
// // =========================
// //
// // +=, -=, *=, /= combine assignment with arithmetic.
// //
// // Example:
// let score1 = 10;
// score1 += 5;   // same as score1 = score1 + 5
// console.log(score1); // Output: 15

// score1 *= 2;   // same as score1 = score1 * 2
// console.log(score1); // Output: 30
