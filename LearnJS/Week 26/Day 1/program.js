function checkForLastName() {
  var lastNameField = document.getElementById("lastNameField");

  if (lastNameField.value.length === 0) {
    alert("Please enter your last name");
    lastNameField.focus();
    lastNameField.style.border = "2px solid red";
    lastNameField.style.backgroundColor = "#FFDDDD";
    return false;
  }
  lastNameField.style.border = "";
  lastNameField.style.backgroundColor = "";
  return true;
}

function checkForSelection(selectElementId) {
  if (document.getElementById(selectElementId).selectedIndex === 0) {
    alert("Please select a state.");
    return false;
  }
  return true;
}
