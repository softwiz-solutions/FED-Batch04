var student = {
  name: "John Doe",
  rollNo: "123",
  // key:"13",
};

// console.log("exist",'name' in student)
// console.log("exist",student.hasOwnProperty('name'))

// var listOfProperties=[]
// for(var key in student){
//     // console.log("key",key)
//     listOfProperties.push(key)
//     // console.log(student[key])// student['name'] ----> student.'name' X
// }
// console.log("list",listOfProperties)

var listOfProperties = Object.keys(student);
// console.log("list",listOfProperties)

for (var i = 0; i < listOfProperties.length; i++) {
  // var key=listOfProperties[i]
  // console.log("key",key)
  // console.log("value",student[key])
}

// var listOfEntries=Object.entries(student)
// console.log("entries",listOfEntries)

console.log("window href", window.location.href);
console.log("window hostname", window.location.hostname);
console.log("window pathname    ", window.location.pathname);

var handleLink = function () {


  window.location.href = "/about.html#contact-section"; // you can add hostname also

  //   var hostname = window.location.hostname;
  //   var link = "http://" + hostname + "/about.html";
  //   window.location.href = link;
};
