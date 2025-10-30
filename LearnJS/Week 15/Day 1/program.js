// if(condition){
// body
// }

// 80% and above - A grade
// 60% to 79% - B grade
// 40% to 59% - C grade
// below 40% - Fail

// var age = parseInt(prompt("Enter your age: "));

// if (age >= 18) {
//   console.log("You are eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// var percentage = parseInt(prompt("Enter your percentage: "));

// if (percentage >= 80) {
//   console.log("A grade");
// } else if (percentage >= 60) {
//   console.log("B grade");
// } else if (percentage >= 40) {// 40 to 59
//   console.log("C grade");
// } else {
//   console.log("F grade");
// }

// console.log("end");

// var book = "math";

// if (book === "math") {
//   console.log("Its Math book");
// } else if (book === "science") {
//   console.log("Its Sciene Book");
// } else {
//   console.log("This is not given book");
// }

// console.log("types of '3'", typeof "3");
// console.log("types of 3", typeof 3);
// console.log("==", "3" == 3);// just match the values
// console.log("===", "3" === 3);// match the values and data types

// Nested If

// var age = parseInt(prompt("Enter your age: "));

// if (age >= 18) {
//   // outer if
//   console.log("You are welcome!");
//   if (age >= 50) {
//     console.log("You are old");
//   } else if (age >= 30) {
//     // 30 to 49
//     console.log("You are young");
//   } else {
//     // 18 to 29
//     console.log("You are teen");
//   }
// } else {
//   if (age >= 13) {
//     console.log("You are a teenager");
//   }
//   console.log("Age must be greater than 18!");
// }

// var category = prompt("Enter your category: a/b/c");

// if (
//   category === "a" ||
//   category == "A" ||
//   category === "b" ||
//   category === "c"
// ) {
//   if (category === "a" || category == "A") {
//     console.log("You got 30% discount");
//   } else if (category == "b") {
//     console.log("You got 20% discount");
//   } else {
//     console.log("You got 10% discount");
//   }
// } else {
//   console.log("Plese enter the category a/b/c");
// }

var firstNumber = parseFloat(prompt("Enter first number: "));
var secondNumber = parseFloat(prompt("Enter second number: "));
var operator = prompt("Enter operator: +,-,*,/");

var result = 0;

// if (operator === "+") {
//   result = firstNumber + secondNumber;
// } else if (operator === "-") {
//   result = firstNumber - secondNumber;
// } else if (operator === "*") {
//   result = firstNumber * secondNumber;
// } else if (operator === "/") {
//   result = firstNumber * secondNumber;
// } else {
//   console.log("Invalid operator");
// }

// console.log("result", result);

    switch (operator) {
    case "+": // operator === "+"
        result = firstNumber + secondNumber;
        break;
    case "-": // operator === "-"
        result = firstNumber - secondNumber;
        break;
    case "*": // operator === "*"
        result = firstNumber * secondNumber;
        break;
    case "/": // operator === "/"
        result = firstNumber / secondNumber;
        break;
    default: // else
        console.log("Invalid operator");
    }

    console.log("result", result);

