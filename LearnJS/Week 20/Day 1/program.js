// function sum(a, b) {
//   var result = a + b;
//   return result;
// }

// var ans = sum(3, 4);
// console.log("ans", ans);

// function toggle(value1, value2) {
//   var result = value1.toUpperCase() + " " + value2.toLowerCase();
//   return result;
// }

// var output = toggle("Hello", "WORLD");
// console.log("output", output);

// var merchTot = 75;
// var orderTot=90;
// if (merchTot >= 100) {
//   orderTot = merchTot;
// } else if (merchTot < 50.01) {
//   orderTot = merchTot + 5;
// } else {
//   orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
// }

// function calcTot(merchTot) {
//   var orderTot;
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
//   }
//   return orderTot;
// }

// var totalToCharge = 2 + calcTot(79.99);
// console.log("🚀 ~ totalToCharge:", totalToCharge);

// var ans=0; // global variable

// function sum(a, b) {
//   var result = a + b;
//   return result;
// }

// function multiply(x, y) {
//   return x * y;
// }

// var ans = sum(2, multiply(2, 4));

// var theSum = 0;

// function sum(a, b) {
//   var theSum = a + b;
// }

// sum(10, 20);

// console.log("the sum", theSum);

// function dayOfWeek(dayOfWk) {
//   var result = "";
//   switch (dayOfWk) {
//     case "Sat":
//       result = "Whoopee";
//       break;
//     case "Sun":
//       result = "Whoopee";
//       break;
//     case "Fri":
//       result = "TGIF!";
//       break;
//     default:
//       result = "Shoot me now!";
//   }
//   return result;
// }
function dayOfWeek(dayOfWk) {
  switch (dayOfWk) {
    case "Sat":
      return "Whoopee";
    case "Sun":
      return "Whoopee";
    case "Fri":
      return "TGIF!";
    default:
      return "Shoot me now!";
  }
}

var output = dayOfWeek("Fri");
console.log("output", output);
