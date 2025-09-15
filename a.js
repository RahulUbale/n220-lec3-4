// =========================
// User Interaction in JavaScript
// =========================
//
// In many web programs, we need to interact with users:
// 1. Take input (like numbers, names, or amounts)
// 2. Show results on the webpage
//
// Let's see how this works! 👇


// 🔹 Getting input from a text box (HTML <input> element)
// -------------------------------------------------------
// Example HTML (this goes in your HTML file):
// <input id="principal" type="number" placeholder="Enter Principal Amount">
// <button onclick="calculateInterest()">Calculate</button>
// <p id="output"></p>
//
// Explanation:
// - <input> → user enters value
// - <button> → user clicks to run JavaScript function
// - <p> → empty paragraph where result will be displayed


// 🔹 Accessing input and displaying result
// -------------------------------------------------------
function calculateInterest() {
    // Step 1: Access the values from all three input fields.
    // Use parseFloat() to convert the input strings to numbers for calculation.
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseFloat(document.getElementById("years").value);

    // Step 2: Perform the simple interest calculation.
    // Simple Interest = Principal * (Rate / 100) * Years
    let interest = (principal * rate * years) / 100;
    let total = principal + interest;

    // Step 3: Format the output message using a template literal.
    // This makes the string clean and easy to read.
    let message = `With a beginning principal of $${principal.toFixed(2)} and with a growth rate of ${rate}% for ${years} years, your total interest will be $${interest.toFixed(2)} with a grand total of $${total.toFixed(2)}.`;

    // Step 4: Display the final, formatted message in the <p id="output"> element.
    document.getElementById("output").innerText = message;
}
// When user types 100 and clicks button → Output: Double of your principal is $200





// =========================
// String Formatting in JavaScript
// =========================
//
// For assignments like Interest Rate Calculator, 
// the output must be in a specific format.
// Let’s learn how to do this! ✨


// 🔹 Template Literals (backticks ``)
// ----------------------------------
// We can build strings using ${variable} inside backticks.
// This makes formatting MUCH easier!

let principal = 1000;
let rate = 5;
let years = 2;

// Simple Interest Formula: Interest = Principal × Rate × Years / 100
let interest = (principal * rate * years) / 100;
let total = principal + interest;

// Correct Output Format:
let message = `With a beginning principal of $${principal} and with a growth rate of ${rate}% for ${years} years, your total interest will be $${interest.toFixed(2)} with a grand total of $${total.toFixed(2)}.`;

console.log(message);

// Output:
// "With a beginning principal of $1000 and with a growth rate of 5% for 2 years, your total interest will be $100.00 with a grand total of $1100.00."
