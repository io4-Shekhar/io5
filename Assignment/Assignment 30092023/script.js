//-----01-----

function findTriangle() {
  var side1 = prompt("Enter side one value");
  var side2 = prompt("Enter side two value");
  var side3 = prompt("Enter side three value");
  let s = (Number(side1) + Number(side2) + Number(side3)) / 2;
  let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log(area.toFixed(2));
}
//findTriangle();

//-------02------

function fiveDigitNumber() {
  const num = prompt("Enter a five digit number");
  if (num.length > 5) {
    return console.error(`Please enter only 5 digit number`);
  }
  if (isNaN(num)) {
    return console.error(`${num} is not a number please Enter a valid number`);
  }
  let a;
  let b;
  let c;
  let d;
  let e;
  a = Math.trunc(num % 10);
  console.log("01---->", a);
  b = Math.trunc(num / 10) % 10;
  console.log("02---->", b);
  c = Math.trunc(num / 100) % 10;
  console.log("03---->", c);
  d = Math.trunc(num / 1000) % 10;
  console.log("04---->", d);
  e = Math.trunc(num / 10000) % 10;
  console.log("05---->", e);
  const sum = a + b + c + d + e;
  console.log("The sum of", num, "is", sum);
}
//fiveDigitNumber();

//----03----

function fiveDigitReverseNumber() {
  const num = prompt("Enter five digit number");
  if (num.length < 5 && num.length > 0) {
    return console.error(`Please enter only 5 digit number`);
  }
  if (isNaN(num)) {
    return console.error(`${num} is not a number please Enter a valid number`);
  }
  let a;
  let b;
  let c;
  let d;
  let e;
  a = Math.trunc(num % 10);
  b = Math.trunc(num / 10) % 10;
  c = Math.trunc(num / 100) % 10;
  d = Math.trunc(num / 1000) % 10;
  e = Math.trunc(num / 10000) % 10;
  console.log("Entered number is", num);
  console.log("reverse number is", a, b, c, d, e);
}
//fiveDigitReverseNumber();

//-----04------

function fourDigitNumber() {
  const sumOfFirstAndLast = prompt("Enter a four digit number");
  if (sumOfFirstAndLast.length > 4) {
    return console.error(`Please enter only 4 digit number`);
  }
  if (isNaN(sumOfFirstAndLast)) {
    return console.error(`${num} is not a number please Enter a valid number`);
  }
  let a;
  let d;
  a = Math.trunc(sumOfFirstAndLast / 1000) % 10;
  d = Math.trunc(sumOfFirstAndLast % 10);
  sum = a + d;
  console.log("Entered number is ", sumOfFirstAndLast);
  console.log("sum of first and last digit is ", sum);
}
//fourDigitNumber();

//------05------

function currency() {
  let amount = prompt("Enter amount");
  if (isNaN(amount)) {
    return console.error(`please Enter a valid amount`);
  }
  let note500;
  let note200;
  let note100;
  let note50;
  let note20;
  let note10;
  let note5;
  let note2;
  let note1;
  rupees = amount;
  note500 = Math.trunc(rupees / 500);
  rupees = rupees % 500;
  note200 = Math.trunc(rupees / 200);
  rupees = rupees % 200;
  note100 = Math.trunc(rupees / 100);
  rupees = rupees % 100;
  note50 = Math.trunc(rupees / 50);
  rupees = rupees % 50;
  note20 = Math.trunc(rupees / 20);
  rupees = rupees % 20;
  note10 = Math.trunc(rupees / 10);
  rupees = rupees % 10;
  note5 = Math.trunc(rupees / 5);
  rupees = rupees % 5;
  note2 = Math.trunc(rupees / 2);
  rupees = rupees % 2;
  note1 = Math.trunc(rupees / 1);
  rupees = rupees % 1;
  sum =
    note500 +
    note200 +
    note100 +
    note50 +
    note20 +
    note10 +
    note5 +
    note2 +
    note1;
  console.log(
    "entered amount is ,",
    amount,
    "total notes",
    sum,
    "notes 500 --->",
    note500,
    "notes 200 --->",
    note200,
    "notes 100 --->",
    note100,
    "notes 50 --->",
    note50,
    "notes 20 --->",
    note20,
    "notes 10 --->",
    note10,
    "notes 5 --->",
    note5,
    "notes 2 --->",
    note2,
    "notes 1 --->",
    note1
  );
}
//currency();

////------06------

function oddEven() {
  const num = prompt("enter number");
  if (isNaN(num)) {
    return console.error(`please Enter a valid number`);
  } else if (num % 2 == 0) {
    console.log(num, "is odd number");
  } else {
    console.log(num, "is even number");
  }
}

//oddEven();

//07

function positiveAndNegativeNumber() {
  const num = prompt("enter a number to find positive or negative");
  if (isNaN(num)) {
    return console.error("please Enter a valid number");
  } else if (num > 0) {
    return console.log(`${num} is a positive number`);
  } else num < 0;
  console.log(`${num} is a negative number`);
}
//positiveAndNegativeNumber();

//08

function LeapYear() {
  const year = prompt("Enter a year to find leap year or normal year");

  if (isNaN(year)) {
    console.log("please enter a valid number");
  } else if (0 == year % 4) {
    console.log(year, " is a leap year");
  } else {
    console.log(year, " is not a leap year");
  }
}

//LeapYear();

//09

function grossSalary() {
  const bs = Number(prompt("enter your basic salary"));
  let gs;
  let hra;
  let da;
  if (bs < 1500) {
    hra = (bs * 10) / 100;
    da = (bs * 90) / 100;
  } else {
    hra = 500;
    da = (bs * 98) / 100;
  }
  gs = hra + bs + da;
  console.log(
    `basic salary--> ${bs}, HRA-->${hra}, DA-->${da}, GrossSalary-->${gs}`
  );
}
//grossSalary();

//10

function age() {
  const r = prompt("Enter Ram age");
  const s = prompt("Enter Shyam age");
  const a = prompt("Enter Ajay age");
  if (r < s && r < a) {
    console.log(`Ram is Youngest, Ram-->${r}, Shyam-->${s}, Ajay-->${a}`);
  } else if (s < a) {
    console.log(`Shyam is youngest, Ram-->${r}, Shyam-->${s}, Ajay-->${a}`);
  } else {
    console.log(`Ajay is youngest, Ram-->${r}, Shyam-->${s}, Ajay-->${a}`);
  }
}
//age();

//11
// 11. Write a program to check whether a triangle is valid or not, when the
//       three angles of the triangle are entered through the keyboard. A triangle
//       is valid if the sum of all the three angles is equal to 180 degrees.

function triangle() {
  const side1 = prompt("Enter first angle");
  const side2 = prompt("Enter second  angle");
  const side3 = prompt("Enter third angle");
  if (Number(side1) + Number(side2) + Number(side3) == 180) {
    return console.log(`This triangle is valid`);
  } else if (side1 + side2 + side3 != 180) {
    console.log("this triangle is not valid");
  } else {
    console.log("please enter a valid angle");
  }
}
//triangle();

//12

function nonNegative() {
  const num = prompt("Enter a value");
  if (isNaN(num)) {
    console.log("please enter a valid number");
  } else if (num > 0) {
    console.log(`Entered number ${num} is non negative`);
  } else {
    console.log("This number is negative");
  }
}

//nonNegative();

//13

function findRectangleOrPerimeter() {
  const l = prompt("please enter a length");
  const b = prompt("please enter a width");
  if (isNaN(l, b)) {
    console.log("please enter a valid number");
  } else if (area > perimeter) {
    let area = l * b;
    let perimeter = (l + b) * 2;
    console.log(
      `entered value ${l},${b} area--> ${area}, This is area of rectangle.`
    );
  } else {
    console.log(
      `Entered value ${l},${b} perimeter--> ${perimeter},this is perimeter`
    );
  }
}

//14

function result() {
  const hindi = Number(prompt("enter your hindi marks"));
  const eng = Number(prompt("enter your english marks"));
  const math = Number(prompt("enter your math marks"));
  const phy = Number(prompt("enter your physics marks"));
  const chem = Number(prompt("enter your chemistry marks"));

  sum = hindi + eng + math + phy + chem;
  console.log(sum);

  if (isNaN(sum)) {
    return console.log("please enter a valid marks");
  } else if ((sum * 60) / 100 >= 300) {
    console.log("congrats !! you got first division");
  } else if ((sum * 59) / 100 >= 300 || (sum * 50) / 100 >= 250) {
    console.log("congrats !! you got second division");
  } else if ((sum * 49) / 100 <= 250 || (sum * 40) / 100 >= 200) {
    console.log("congrats !! you got third division");
  } else if (sum < 200) {
    console.log("you are fail, try next time");
  }
}
//result();

//findRectangleOrPerimeter();
//16

function checkFitCandidate() {
  const gen = prompt("Enter Gender as M or F");
  const exp = Number(prompt("How much Experience do you have?"));
  const qual = prompt("Enter you qualification in PG or G");

  if (gen == "M" && exp >= 10 && qual == "PG") {
    return console.log(`Congrats, You are selected with 15000 rs`);
  } else if (gen == "M" && exp >= 10 && qual == "G") {
    return console.log(`Congrats, You are selected with 10000 rs`);
  } else if (gen == "M" && exp < 10 && qual == "PG") {
    return console.log(`Congrats, You are selected with 10000 rs`);
  } else if (gen == "M" && exp < 10 && qual == "G") {
    return console.log(`Congrats, You are selected with 7000 rs`);
  } else if (gen == "F" && exp >= 10 && qual == "PG") {
    return console.log(`Congrats Girl, You are selected with 12000 rs`);
  } else if (gen == "F" && exp >= 10 && qual == "G") {
    return console.log(`Congrats Girl, You are selected with 9000 rs`);
  } else if (gen == "F" && exp < 10 && qual == "PG") {
    return console.log(`Congrats Girl, You are selected with 10000 rs`);
  } else if (gen == "F" && exp < 10 && qual == "G") {
    return console.log(`Congrats Girl, You are selected with 6000 rs`);
  } else {
    return console.log("Sorry!! you are not fit for this role");
  }
}

//checkFitCandidate();

//17
function reversedNumber() {
  const num = prompt("Enter 5 digit number");
  if (isNaN(num)) {
    console.log("Please enter a valid number");
  }
  let a;
  let b;
  let c;
  let d;
  let e;
  a = Math.trunc(num % 10);
  b = Math.trunc(num / 10) % 10;
  c = Math.trunc(num / 100) % 10;
  d = Math.trunc(num / 1000) % 10;
  e = Math.trunc(num / 10000) % 10;
  reverseSum = a + b + c + d + e;
  sum = e + d + c + b + a;
  console.log("Entered number is", num, "reverse", a, b, c, d, e);
  console.log(` result--> ${sum} = ${reverseSum}`);
}
//reversedNumber();

//18

// 18. If cost price and selling price of an item are input through the
// keyboard, write a program to determine whether the seller has made profit
// or incurred loss. Also determine how much profit he made or loss he
// incurred.
function profitLose() {
  const cp = prompt("enter cost price ");
  const sp = prompt("enter selling price ");
  if (isNaN(cp, sp)) {
    console.log("please enter a valid number");
    p = sp - cp;
    l = cp - sp;
  } else if (p > l) {
    console.log(`total profit ${p}rs.`);
  } else if (l > p) {
    console.log(`total loss ${l}rs.`);
  }
}
//profitLose();

//19.
// 19. Write a program to receive Cartesian co-ordinates (x, y) of a point
//       and convert them into polar co-ordinates (r, φ- 9) Hint:
//       r=Math.sqrt(x^2+y^2)and φ =Math.tan^-1 (y/X)</p>

// int x, y, degree;
// float r, phi, p;
// function
// //Take cartesian co-ordinates from user
// const x =prompt("Enter the co-ordinate points x");
// scan f("%d %d", &x, &y);

// //calculate the value of r
// r = sqrt(x*x + y*y);

// //calculate the value of phi
// //for tan inverse we use atan(value)
// phi = atan(y/x);

// //Print polar co-ordinates on screen

// printf("The polar co-ordinates of (%d,%d) is (%f, %f)",x, y, r, phi);

// //convert radian value into degree
// p = 3.141592;
// degree = phi * (180/p);
// printf("\nThe polar co-ordinates in Degree: (%f, %d)", r, degree);

// return 0;
// }
function leapYear() {
  for (let i = 1000; i < 5000; i++) {
    if (i % 4 == 0) {
      console.log(i, " is a leap year");
    }
  }
}
//leapYear()
