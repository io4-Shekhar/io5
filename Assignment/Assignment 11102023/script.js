// * A certain grade of steel is graded according to the following conditions:
//  *
//  * (i) Hardness must be greater than 50
//  * (ii) Carbon content must be less than 0.7
//  * (iii) Tensile strength must be greater than 5600
//  *
//  *
//  * The grades are follows
//  * 1. Grade is 10 is all three conditions are met
//  * 2. Grade is 9: if (i) and (ii)  are met
//  * 3. Grade is 8: if (ii) and (iii)  are met
//  * 4. Grade is 7: if (i) and (iii)  are met
//  * 5. Grade is 6: if only one is met
//  * 6. Grade is 5: if none of the conditions are met

function findGrades() {
  const hardness = prompt("enter hardness");
  const carbon = prompt("enter carbon content");
  const tensile = prompt("enter tensile strength");
  if (hardness > 50 && carbon < 0.7 && tensile > 5600) {
    console.log("grade is 10");
  } else if (hardness > 50 && carbon < 0.7) {
    console.log("grade is 9");
  } else if (carbon < 0.7 && tensile > 5600) {
    console.log("grade is 8");
  } else if (hardness > 50 && tensile > 5600) {
    console.log("grade is 7");
  } else if (hardness > 50 || carbon < 0.7 || tensile > 5600) {
    console.log("grade is 6");
  } else {
    console.log("grade is 5");
  }
}
//findGrades();

//Q. 03

// A library charges a fine for every book returned late.
// For first 5 days the fine is 50 paise,
// for 6-10 days fine is one rupee and above 10 days fine is 5 rupees.
// If you return the book after 30 days your membership will be cancelled.
// Write a program to accept the number of days the member is late to return
// the book and display the fine or the appropriate message.

function fineCharge() {
  const days = Number(prompt("Enter how many days to return the books"));

  if (days <= 5) {
    console.log("you pay a fine of 50 paisa !");
  } else if (days >= 6 && days <= 10) {
    console.log("you pay a fine of 1 rupees !");
  } else if (days > 10 && days < 30) {
    console.log("you pay a fine of 5 rupees !");
  } else if (days >= 30) {
    console.log("your membership is cancelled");
  } else {
    console.log("please inter valid days");
  }
}
//fineCharge();

//04
// If the three sides of a triangle are entered through the keyboard,
// write a program to check whether the triangle is valid or not.
// The triangle is valid if the sum of two sides is greater than the largest of the three sides.

function findTriangle() {
  const side1 = Number(prompt("Enter side1 of triangle"));
  const side2 = Number(prompt("Enter side2 of triangle"));
  const side3 = Number(prompt("Enter side3 of triangle"));

  if (side1 + side2 > side3 || side2 + side3 > side1 || side3 + side1 > side2) {
    console.log("this triangle is valid");
  } else {
    console.log("this triangle is not valid");
  }
}
//findTriangle();

//05
//If the three sides of a triangle are entered through the keyboard,
//write a program to check whether the triangle is isosceles,
//equilateral, scalene or right angled triangle.

function rightTriangle() {
  const side1 = Number(prompt("Enter side1 of triangle"));
  const side2 = Number(prompt("Enter side2 of triangle"));
  const side3 = Number(prompt("Enter side3 of triangle"));
  if (side1 == side2 && side2 == side3 && side3 == side1) {
    console.log("this triangle is equilateral");
  } else if (side1 == side2 || side2 == side3 || side3 == side1) {
    console.log("this triangle is isosceles");
  } else if ((side1 != side2) != side3) {
    console.log("this triangle is scalene");
  } else {
    console.log("please find a valid triangle");
  }
}
//rightTriangle();

//factorial value 5

// const num = 5;
// let fac = 1;
// for (i = 1; i <= num; i++) {
//   fac = fac * i;
//   console.log("factorial of", + num + "is", +fac);
// }
const str = [
  "If",
  "we",
  "remove",
  "spaces",
  "from",
  "the",
  "answer",
  "s",
  "approach",
];
// const arr1 = [];
// const arr2 = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i].length <= 3) {
//     arr1.push(str[i]);
//   } else {
//     arr2.push(str[i]);
//   }
// }
// console.log(arr1);
// const numb = [
//   4, 23, 7, 39, 19, 0, 9, 14, 89, 7, 1545, 5498, -35, 522, -0415, 78, 56, -34,
// ];

// for (let i = 0; i < numb.length; i++) {
//   let newVal = numb[i] * 2;
//   console.log("1", newVal);
// }

// const arr = [
//   "Friday",
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Wednesday",
//   "Wednesday",
//   "Friday",
//   "Friday",
// ];

// const withoutDupes = [...new Set(arr)];
// console.log("arr", withoutDupes);

// const filterMethod = arr.filter((element, index) => {
//   return arr.indexOf(element) == index;
// });
// console.log("withoutDopes", filterMethod);
// const arr5 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7, 1, 2, 3];

// for (let i = 0; i < arr5; i++) {
//   console.log("1", arr5);
// }
// const main = document.querySelector("#body");

// const olTag = document.createElement("ol");
// olTag.setAttribute("type", "A");

// main.append("olTag");

// const liTag = document.createElement("li");
// liTag.createElement("thor");
// olTag.append("liTag");
const body = document.querySelector("#body");

const olTag = document.createElement("ol");
olTag.setAttribute("id", "avengers");
olTag.classList.add("avengers-class");
olTag.setAttribute("type", "A");
body.append(olTag);

const hulk = document.createElement("li");
hulk.classList.add("hulk");
hulk.setAttribute("id", "hulk");
hulk.innerText = "Hulk";

olTag.append(hulk);

const thor = document.createElement("li");
thor.classList.add("thor");
thor.setAttribute("id", "thor");
thor.innerText = "Thor";

olTag.prepend(thor);
