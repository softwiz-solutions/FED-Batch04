var input = document.getElementById("calculation");

function appendValue(value) {
  input.value += value;
}

function clearDisplay() {
  input.value = "";
}

function calculate() {
  input.value = eval(input.value);
}
