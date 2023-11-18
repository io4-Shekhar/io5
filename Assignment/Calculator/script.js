let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}
function valueBack() {
  display.value = clear;
}
function calculateResult() {
  if (display) {
    display.value = eval(display.value);
  } else {
    display.value = "Error";
  }
}
// if (value == "back") {
//   return getBackspace();
// }
