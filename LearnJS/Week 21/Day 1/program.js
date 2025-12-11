function submitForm() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "" || password == "") {
    alert("Please fill the required fields");
  } else {
    alert("Email entered: " + email);
  }
}

function getCityName() {
  let cityName;
  let zipCode = document.getElementById("zip").value;
  switch (zipCode) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
      break;
    default:
      cityName = "Unknown City";
  }
  document.getElementById("city").value = cityName;
}

// case "60608" :
// cityName = "Chicago";
// break;
// case "68114" :
// cityName = "Omaha";
//  break;
//  case "53212" :
//  cityName = "Milwaukee";

function expandText() {
  var expandedParagraph =
    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and  nable them to grasp branches for long periods of time.Slow lorises have a toxic bite, a rare trait among mammals.";

  document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

// function addList() {
//   var list = "<ul><li>math</li><li>bio</li></ul>";

//   document.getElementById("fav-books").innerHTML = list;
// }

// function hideImage() {
//   let image = document.getElementById("blob-fish");
//   image.className = "hide-image";
// }

function changeColor(id,className) {
  let heading = document.getElementById(id);
  heading.className += " "+className;
}
