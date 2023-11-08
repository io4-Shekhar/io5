//Q 01.
//Five numbers are entered from the keyboard into an array.
// The number to be searched is entered through the keyboard by the user.
// Write a program to find if the number to be
// searched is present in the array and if it is present,
// display the number of times it appears in the array.
// // for loop till 5 // inside loop, prompt to enter number //
// push the number to array // if arr.lenght ===5 //
// enter number to find inside the array // for loop // arr[i] == enteredNum
// Create an empty array to store numbers
function question01() {
  const numbers = [];
  // Use a loop to input five numbers
  for (let i = 0; i < 5; i++) {
    const inputNumber = Number(prompt(`Enter number ${i + 1}:`));
    numbers.push(inputNumber);
  }
  console.log("--->1", numbers);
  const searchNumber = Number(prompt("Enter the number to be searched:"));
  let count = 0;
  // Use a loop to search for the number in the array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == searchNumber) {
      count++;
    }
  }
  if (count > 0) {
    console.log(`The number ${searchNumber} is present in the array.`);
    console.log(`It appears ${count} time(s) in the array.`);
  } else {
    console.log(`The number ${searchNumber} is not present in the array.`);
  }
}
//question01();

//02.
// Five numbers are entered from the keyboard into an array.
//Write a program to find out how many of them are positive,
//how many are negative, how many are even and how many odd.

// positive,
// negative,
// even,
// odd

function question02() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const inputNumber = Number(prompt(`Enter number ${i + 1}:`));
    numbers.push(inputNumber);
  }
  console.log("--->Entered numbers", numbers);

  let positiveCount = 0;
  let negativeCount = 0;
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveCount++;
    } else if (numbers[i] < 0) {
      negativeCount++;
    }

    if (numbers[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  console.log(`Number of positive numbers: ${positiveCount}`);
  console.log(`Number of negative numbers: ${negativeCount}`);
  console.log(`Number of even numbers: ${evenCount}`);
  console.log(`Number of odd numbers: ${oddCount}`);
}
//question02();

//03.
//Write a program to copy the contents of one array into another in the reverse order.
// (with prototype) arr1 = [1,2,3,4] newArr = [4,3,2,1]
function question03() {
  const newArray = [];
  for (let i = 1; i <= 4; i++) {
    newArray.push(i);
  }
  console.log("--> original", newArray);
  arr1 = [...newArray];
  console.log("--> reverse", arr1.reverse());
}
//question03();

//04.

// //Reverse array without using prototypes [4,8,9,2] to [2,9,8,4]

function question04() {
  const originalArray = [4, 8, 9, 2];
  const reversedArray = [];

  for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
  }
  console.log("original array", originalArray);
  console.log("reversedArray", reversedArray);
  // Output: [2, 9, 8, 4]
}

//question04();

//05
//Write a simple JavaScript program to join all elements of the following array into a string.
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Expected Output : "Red,Green,White,Black" "Red Green White Black" "Red+Green+White+Black"

function question05() {
  const myColor = ["Red", "Green", "White", "Black"];

  const joinedWithComma = myColor.join(",");
  console.log("01---->", joinedWithComma);
  // Output: "Red,Green,White,Black"

  const joinedWithSpace = myColor.join(" ");
  console.log("02---->", joinedWithSpace);
  // Output: "Red Green White Black"

  const joinedWithPlus = myColor.join("+");
  console.log("03--->", joinedWithPlus);
  // Output: "Red+Green+White+Black"
}
//question05();

//06
// Write a JavaScript program to sort the items of an array.
//Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//Sample Output : -4,-3,1,2,3,5,6,7,8 let maxVal = 0; arr1[i] > maxVal maxVal = arr[i]

function question06() {
  var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
  arr1.sort(function (a, b) {
    return a - b;
  });
  console.log("1", arr1);
  var sortedArrayString = arr1.join(",");

  console.log(sortedArrayString); // Output: "-4,-3,1,2,3,5,6,7,8"
}
//question06();

//07
//Write a JavaScript program to find the most frequent item in an array.
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

function question07() {
  var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  var itemCounts = {};
  for (var i = 0; i < arr1.length; i++) {
    var present = arr1[i];
    //console.log("--->", present);
    if (itemCounts[present] == undefined) {
      itemCounts[present] = 1;
    } else {
      itemCounts[present]++;
    }
  }
  //console.log("--->", itemCounts);
  var mostRepeatItem;
  var maxCount = 0;
  for (var item in itemCounts) {
    if (itemCounts[item] > maxCount) {
      mostRepeatItem = item;
      maxCount = itemCounts[item];
    }
  }
  console.log(mostRepeatItem + " ( " + maxCount + " times )");
  // Output: "a ( 5 times )"
}
//question07();

//08
// Write a JavaScript program that accepts a string as input and swaps the case of each character.
//For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase() {
  var swappedString = "";
  for (var i = 0; i < inputString.length; i++) {
    var currentChar = inputString.charAt(i);
    if (currentChar == currentChar.toUpperCase()) {
      swappedString += currentChar.toLowerCase();
    } else {
      swappedString += currentChar.toUpperCase();
    }
  }
  return swappedString;
}
var inputString = "The Quick Brown Fox";
var swappedString = swapCase(inputString);
// console.log("08-->", swappedString);

// Output: "tHE qUICK bROWN fOX"

//09
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
function removeDuplicates(arr) {
  var uniqueItems = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var currentItem = arr[i];
    var lowercaseItem = currentItem.toLowerCase();
    if (!uniqueItems[lowercaseItem]) {
      uniqueItems[lowercaseItem] = true;
      result.push(currentItem);
    }
  }
  return result;
}
var inputArray = [
  "apple",
  "Banana",
  "apple",
  "cherry",
  "banana",
  "Cherry",
  "date",
];
var resultArray = removeDuplicates(inputArray);
// console.log("09 -->", resultArray);

// Output: ["apple", "Banana", "cherry", "date"]

//10
//We have the following arrays : color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//o = ["th","st","nd","rd"] Write a JavaScript program to display the colors in the following way :
//"1st choice is Blue ." "2nd choice is Green." "3rd choice is Red." Note : Use ordinal numbers to tell their position.

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th", "st", "nd", "rd"];
function question10() {
  for (var i = 0; i < color.length; i++) {
    var ordinal = i + 1;
    var suffix;
    //console.log("1", ordinal, suffix);
    if (ordinal >= 11 && ordinal <= 13) {
      suffix = o[0]; // Use "th" for 11th, 12th, and 13th
    } else {
      var lastDigit = ordinal % 10;
      //console.log("2", lastDigit);
      if (lastDigit >= 1 && lastDigit <= 3) {
        suffix = o[lastDigit]; // Use "st", "nd", or "rd" for 1st, 2nd, or 3rd
      } else {
        suffix = o[0]; // Use "th" for all other cases
      }
    }

    console.log(ordinal + suffix + " choice is " + color[i] + ".");
  }
}
//question10();
//11
// There are two arrays with individual values.
// Write a JavaScript program to compute the sum of each individual index value in the given array.
//Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13]; Expected Output : [4, 5, 8, 10, 12, 13]
function question11() {
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  var maxLength = Math.max(array1.length, array2.length);
  var result = [];

  for (let i = 0; i < maxLength; i++) {
    const value1 = array1[i] || 0;
    const value2 = array2[i] || 0;
    const sum = value1 + value2;
    result.push(sum);
  }
  console.log(result); // Output: [4, 5, 8, 10, 12, 13]
}
//question11();

//12
// Write a JavaScript program to find duplicate values in a JavaScript array.
function findDuplicates(arr) {
  var duplicateValues = [];
  var seen = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (seen[item]) {
      if (duplicateValues.indexOf(item) === -1) {
        duplicateValues.push(item);
      }
    } else {
      seen[item] = true;
    }
  }
  return duplicateValues;
}
var myArray = [1, 2, 3, 3, 2, 5, 8, 1, 6, 3, 7];
var duplicates = findDuplicates(myArray);
// console.log("Duplicate values: " + duplicates);

//13
// Write a JavaScript program to flatten a nested (any depth) array.
//If you pass shallow, the array will only be flattened to a single level.
// Sample Data : console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6] console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); [1, 2, 3, [[4]], 5, 6]

function flatten(arr, shallow) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && !shallow) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
var nestedArray = [1, [2], [3, [[4]]], [5, 6]];

console.log(flatten(nestedArray));
console.log(flatten(nestedArray, true));

//14
// Write a JavaScript program to compute the union of two arrays.
//Sample Data : console.log(union([1, 2, 3], [100, 2, 1, 10])); [1, 2, 3, 10, 100]

function union() {
  arr1 = [1, 2, 3];
  arr2 = [100, 2, 1, 10];
  var unionSet = new Set(arr1);
  for (var i = 0; i < arr2.length; i++) {
    unionSet.add(arr2[i]);
  }
  var unionArray = Array.from(unionSet);
  return unionArray;
}
var array1 = [1, 2, 3];
var array2 = [100, 2, 1, 10];

console.log(union(array1, array2));
