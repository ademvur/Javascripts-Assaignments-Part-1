let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let num3 = +prompt("Enter third number:");

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let min = Math.min(num1, num2, num3);
let max = Math.max(num1, num2, num3);

console.log("Sum: " + sum);
console.log("Product: " + product);
console.log("Minimum: " + min);
console.log("Maximum: " + max);