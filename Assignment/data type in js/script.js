//1. What is the data-type of
typeof "Italy";
typeof 501;
// 501,
// false,
// [23, 546, 67,8,90],
// undefined,
// null,
// {},
// Number(India),
// Date(),
// ?

//2. Find output
console.log("output-1", "500" + 100); //500100
console.log("output-2", 56 + 100); //156
console.log("output-3", 56 + "100"); //56100
console.log("output-4", "500" / "100"); //5
console.log("output-5", 56 + 100 + true); //157
console.log("output-6", 56 + 100 + Number(true)); //157
console.log("output-7", 56 + 100 + "true"); //156true
console.log("output-8", 56 + 100 + Number("true")); //156true  //Nan
console.log("output-9", 56 + 100 + Number("Vinay")); //156Vinay //Nan
console.log("output-9", 50 - "100" + "Vinay"); //-50Vinay

function LeapYear(year) {
  if (0 == year % 4) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}
const year = prompt("Enter a year:");

LeapYear(year);
