// var cities = ["karachi", "lhr", "isb"];
// cities[1] = "fsd";
// cities[3] = "mlt";
// console.log("cities", cities);

// Ch #16
// 1. push() // add element at the end of array.
// 2. pop()

// 2. pop(), remove the last element of array

// cities.pop();
// console.log("cities", cities);
// city=prompt("Enter cities name");
// cities.push("fsd", "mtl", "xyz",city);
// console.log("cities", cities);

// var ageNumber = [1, 2, 3];
// ageNumber.pop();
// ageNumber.pop();
// ageNumber.push(10);
// ageNumber.push(19, 20, 21);
// ageNumber.pop();
// console.log("ageNumber", ageNumber);

// Shift, UnShift

// 1. Shift // remove the first element of array
// var animals=['dog','cat','monkey']

// animals.shift()
// console.log("animals",animals)
// 1. unshift // add element at the start of array

// animals.unshift('elephant','parret')
// animals.shift()
// animals.shift()
// animals.unshift('lion')
// console.log("animals",animals)

// var cities = [];

// for (let i = 0; i < 5; i++) {
//   var userCity = prompt("Enter your city name");// fsd
//   cities.push(userCity);// ['lhr','fsd']
// }
// console.log("usercity", userCity);

// Slice and Splice

// var animals=['dog','cat','monkey']
// .splice(indexNumber,number of elemnts to remove after the index,elments...)

// animals.splice(0,2,'deer')
// console.log("🚀 ~ animals:", animals)

// Slice
// var animals=['dog','cat','monkey','loin']

// var newAnimalsArray=animals.slice(1,3)
// console.log("🚀 ~ newAnimalsArray:", newAnimalsArray)
// console.log("animal",animals)

var animal = ["dog", "lion"];

animal.splice(1, 1, "elephant", "deer", "eagle"); // ['dog',"elephant", "deer", "eagle"]
animal.pop(); // ['dog',"elephant", "deer"]
animal.push("eagle"); //['dog',"elephant", "deer",'eagle']
animal.splice(2, 1); // ['dog',"elephant",'eagle']
console.log("custom animals", animal.slice(1, 3)); // ["elephant",'eagle']
console.log("animals", animal); // ['dog',"elephant",'eagle']
