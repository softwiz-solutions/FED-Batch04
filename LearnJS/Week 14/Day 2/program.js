// Comparison Operators

// < , > , !=, == , <=, >=

// var a = 9;
// var b = 20;
// console.log("check a grater than or euqal b", a >= b);

// Logiacal Operators:
// AND (&&) , OR (||) , NOT(!)
// var a=49
// console.log(" a grater than 10 and less than 50");

// var result = a > 10 && a < 50;
// //   True && True == true
// //  False && True= false

// var b = 0;
// var resultB = !(b > 10 || b > 50 || b == 0);
// False || False || flase =false
//  false || fale || true = true

//
// console.log("condition", resultB);

// var grade = "B";

// var isPassed = grade == "A" || grade == "B" || grade == "C";
// True || false || false = true
// false || true || false =true
// console.log("🚀 ~ isPassed:", isPassed)

// == , ===

// console.log("3"==3) //only checks value
// console.log(3===3) // checks value and DT

// var userName = prompt("Enter your name");
// var fatherName = prompt("Please enter your father name");
// var userClass = prompt("Plese enter your calss");
// console.log(
//   "Your name is ",
//   userName,
//   "your fathername is ",
//   fatherName,
//   " your class is",
//   userClass
// );

// var grade = prompt("enter your grade");

// var isPassed = grade == "A" || grade == "B" || grade == "C";
// console.log("🚀 ~ isPassed:", isPassed)

// var userName = parseInt(prompt("Enter first value")); // "12"
// var secondNumber = parseInt(prompt("Enter second value")); // "12"
// parsent("12")
// 12
// var secondNumber = prompt("Enter second value");

// var firstNumberInINt = parseInt(firstNumber); // 12
// var secondNumberInInt = parseInt(secondNumber);
// console.log("check", firstNumber > secondNumber);

// Data types
// string , "hello",'A'
// number, 133, 234.2
// boolean: true , false

// var a = 10;
// a += 20; // a=a+20
// a-+30
// console.log("a", a);

// var grade = prompt("Enter your grade");

// var result = grade == "A" || grade == "B" ? "you are pass" : "you are fail";
// console.log("🚀 ~ result:", result);

// var age = Number(prompt("Enter your name"));
// var result = age > 18 ? "you are adult" : "you are child";
// console.log("🚀 ~ result:", result);

//************ IF */

var age = parseInt(prompt("Enter yoour age"));

// SYNTAX
// if (condtion) {
// body
// }

if (age > 18) {
  console.log("You are welcome!");
} else {
  console.log("You are not eligible! age must be greater than 18");
}
