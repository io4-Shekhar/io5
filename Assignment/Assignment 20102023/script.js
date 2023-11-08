//Q 01.
// Five numbers are entered from the keyboard into an array. The number to be
// searched is entered through the keyboard by the user. Write a program to
// find if the number to be searched is present in the array and if it is
// present, display the number of times it appears in the array. // for loop
// till 5 // inside loop, prompt to enter number // push the number to array
// // if arr.length ===5 // enter number to find inside the array // for loop
//  arr[i] == enteredNum

//Q 02.
// Five numbers are entered from the keyboard into an array. Write a program
//       to find out how many of them are positive, how many are negative, how many
//       are even and how many odd. positive, negative, even, odd

// const num2 = Number(prompt("enter second number of five"));
// const num3 = Number(prompt("enter third number of five"));
// const num4 = Number(prompt("enter fourth number of five"));

// let positiveNumber;
// let negativeNumber;
// let evenNumber;
// let oddNumber;

// if (num > 0) {
//   positiveNumber.push();
//   console.log("01--> this is positive number", num);
// } else if (num < 0) {
//   negativeNumber.push();

//   console.log("02--> this is negative number", num);
// } else if (num % 2 == 0) {
//   evenNumber.push();

//   console.log("03--> this is even number", num);
// } else if (num % 2 != 0) {
//   oddNumber.push();
//   console.log("01--> this is odd number", num);
// } else {
//   console.log("please enter a valid number");
// }
// if num > 0:
//     positive_count += 1
// else if num < 0:
//     negative_count += 1

// if num % 2 == 0:
//     even_count += 1
// else:
//     odd_count += 1
// console.log(
//   `1${positiveNumber},2${negativeNumber},3${evenNumber},4${oddNumber}`
// );}
// numbers();
// console.log(`Positive Number ${}`)
// print("Results:")
// print(f"Positive numbers: {positive_count}")
// print(f"Negative numbers: {negative_count}")
// print(f"Even numbers: {even_count}")
// print(f"Odd numbers: {odd_count}")

//Print all value using index values
// const array = [
//   [
//     "Sunday",
//     "Monday",
//     [
//       -4,
//       -3,
//       2,
//       3,
//       ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
//     ],
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Poonam",
//   ],
//   "duck",
//   "ant",
//   "Cat",
//   [
//     ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
//     1,
//     "Ritik",
//     5,
//   ],
// ];
// console.log("01.--->", array[0][0]);
// console.log("02.--->", array[0][1]);
// console.log("04.--->", array[0][2][0]);
// console.log("05.--->", array[0][2][1]);
// console.log("06.--->", array[0][2][2]);
// console.log("07.--->", array[0][2][3]);
// console.log("08.--->", array[0][2][4][0]);
// console.log("09.--->", array[0][2][4][1]);
// console.log("10.--->", array[0][2][4][2]);
// console.log("11.--->", array[0][2][4][3]);
// console.log("12.--->", array[0][2][4][4][0]);
// console.log("13.--->", array[0][2][4][4][1]);
// console.log("14.--->", array[0][2][4][4][2]);
// console.log("15.--->", array[0][2][4][4][3]);
// console.log("16.--->", array[0][2][4][5]);
// console.log("17.--->", array[0][3]);
// console.log("18.--->", array[0][4]);
// console.log("19.--->", array[0][5]);
// console.log("20.--->", array[0][6]);
// console.log("21.--->", array[1]);
// console.log("22.--->", array[2]);
// console.log("23.--->", array[3]);
// console.log("24.--->", array[4][0][0]);
// console.log("25.--->", array[4][0][1]);
// console.log("26.--->", array[4][0][2][0]);
// console.log("27.--->", array[4][0][2][1]);
// console.log("28.--->", array[4][0][2][2]);
// console.log("29.--->", array[4][0][2][3]);
// console.log("30.--->", array[4][0][2][4][0]);
// console.log("31.--->", array[4][0][2][4][1]);
// console.log("32.--->", array[4][0][2][4][2]);
// console.log("33.--->", array[4][0][2][4][3]);
// console.log("34.--->", array[4][0][2][5]);
// console.log("35.--->", array[4][1]);
// console.log("36.--->", array[4][2]);
// console.log("37.--->", array[4][3]);

// //Q 02.
// const array2 = [
//   [
//     "Sunday",
//     "Monday",
//     "Pikachu",
//     [
//       "Bulbasour",
//       -4,
//       -3,
//       2,
//       3,
//       [
//         "this is string",
//         "Sunny",
//         "mew",
//         false,
//         null,
//         [1, 2, "Shekhar", "Charizard", 4],
//         "vinay1",
//       ],
//     ],
//     "mewTwo",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Poonam",
//   ],
//   "duck",
//   "ant",
//   "Treecko",
//   "Cat",
//   [
//     [
//       "abc",
//       4,
//       "Torchik",
//       [
//         "Khushbu",
//         78457,
//         "sharpido",
//         false,
//         null,
//         "Squirtel",
//         ["Ditto", 1, 2, "Ravana", 4],
//         "Sapna",
//       ],
//     ],
//     "Mr.Mime",
//     1,
//     "Ritik",
//     5,
//   ],
//   "Blaziken",
// ];

// // console.log("02-->", array2[0]);
// // console.log("02-->", array2[0][0]);
// // console.log("02-->", array2[0][1]);
// // console.log("02-->", array2[0][2]);
// // console.log("02-->", array2[0][3][0]);
// // console.log("02-->", array2[0][3][1]);
// // console.log("02-->", array2[0][3][2]);
// // console.log("02-->", array2[0][3][3]);
// // console.log("02-->", array2[0][3][4]);
// // console.log("02-->", array2[0][3][5][0]);
// // console.log("02-->", array2[0][3][5][1]);
// // console.log("02-->", array2[0][3][5][1]);
// console.log("01--->");
