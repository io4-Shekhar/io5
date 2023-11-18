const display = document.getElementById("calc-operation");
const sum = document.getElementById("calculation");

let displayString = "";

const buttons = document.querySelectorAll(".button");

Array.from(buttons).map((button) => {
  button.addEventListener("click", (event) => {
    let str = displayString;
    let strLen = str[str.length - 1];
    let current = event.target.value;

    if (current == "ac") {
      return getClearCalculation();
    }
    console.log("current", current);
    if (current == "back") {
      return getBackspace();
    }

    if (
      (strLen == "+" ||
        strLen == "-" ||
        strLen == "*" ||
        strLen == "/" ||
        strLen == "=") &&
      (current == "+" ||
        current == "-" ||
        current == "/" ||
        current == "*" ||
        current == "=")
    ) {
      getEvaluation(current);
    } else {
      getDisplayValue(current);
      getInputValue(current);
    }
  });
});

const getInputValue = (value) => {
  if (
    displayString.includes("+") ||
    displayString.includes("-") ||
    displayString.includes("*") ||
    displayString.includes("/") ||
    (displayString.includes("=") &&
      (value == "+" ||
        value == "*" ||
        value == "/" ||
        value == "-" ||
        value == "="))
  ) {
    getEvaluation();
    return displayString;
  } else {
    // getDisplayValue(value);
  }
};

const getDisplayValue = (value) => {
  displayString = displayString + value;
  display.innerText = displayString;
};

const getEvaluation = () => {
  const total = eval(displayString);
  sum.innerText = total;
};

const getClearCalculation = () => {
  displayString = "";
  display.innerText = "0";
  sum.innerText = "0";
  return displayString;
};

const getBackspace = () => {
  displayString = displayString.slice(0, -1);
  display.innerText = displayString;
  getEvaluation();
};
