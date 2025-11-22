var cleanCities = ["lhr", "fsd", "isb", "mlt"];
var myCity = prompt("Enter your citi name, e.g fsd"); // queo
var cleanCityExist = false;

for (var i = 0; i < cleanCities.length; i++) {
  if (cleanCities[i] == myCity.toLowerCase()) {
    cleanCityExist = true;
    console.log("your city is clean", myCity);
    // alert("your city is clean", myCity);
    break;
  }
}

if (cleanCityExist == false) {
//   alert("your city is not clean");
}

// for (var i = 0; i < cleanCities.length; i++) {
//   cleanCities[i] = cleanCities[i].toUpperCase();
// }
// console.log("clearn city upper case", cleanCities);
