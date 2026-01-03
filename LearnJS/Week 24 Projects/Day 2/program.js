// var plan1Name = "Basic";
// var plan1Price = 3.99;
// var plan1Space = 100;
// var plan1Data = 1000;
// var plan1Pages = 10;
// var plan2Name = "Professional";
// var plan2Price = 5.99;
// var plan2Space = 500;
// var plan2Data = 5000;
// var plan2Pages = 50;
// var plan3Name = "Ultimate";
// var plan3Price = 9.99;
// var plan3Space = 2000;
// var plan3Data = 20000;
// var plan3Pages = 500;

// object
// var objectName={
//    property1: value1,
//    property1: value1,
// }

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  data: 1000,
  pages: 10,
};

var plan2 = {
  name: "Professional",
  price: 5.99,
  space: 500,
  data: 5000,
  pages: 50,
};

// var plan3 = {
//   name: "Ultimate",
//   price: 9.99,
//   space: 2000,
//   data: 20000,
//   pages: 500,
//   buy: function () {
//     console.log("this plan is buyed");
//   },
// };
// console.log("buy", plan3.buy());

// var sayHello = function () {
//   console.log("hello 2");
// };
// sayHello();

// var student = {
//   name: "John",
//   age: 21,
//   class: "Final Year",
//   rollNo: 45,
//   school: "ABC Institute",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
//   cninc: "35201-1234567-8",
// };
// delete student.cninc

// console.log("student details", student["name"]);

// console.log("exist",'name' in student)

// Object Methods

var plan1 = {
  name: "Basic",
  price: 3.99,
  space: 100,
  data: 1000,
  pages: 10,
  discountMonths: [6, 7],
  calcAnnual: function (discountPercent) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    if (this.discountMonths.includes(thisMo)) {
      bestPrice = this.price * discountPercent;
    }

    return bestPrice * 12;
  },
};

console.log (plan1.calcAnnual(0.8));
