const kia = {
  sonet: {
    engine: 3,
    break: "ABS",
    Acc: "XYZ",
    seatbelt: "Nylon",
    light: " Highbeam",
    horn: "Full volume",
    steering: " two spoke",
  },
  seltos: {
    engine: 4,
    break: "EBS",
    Acc: "ABC",
    seatbelt: "Plystrene",
    light: " lowbeam",
    horn: "low  volume",
    steering: " three spoke",
  },
  carens: {
    engine: 4,
    break: "EBS + ABS",
    Acc: "JKl",
    seatbelt: "Nylon",
    light: " lowbeam",
    horn: "low  volume",
    steering: " three spoke",
  },
};

const students = {
  ritik: {
    class: "b-tech",
    age: 21,
    cont: "78787878",
    email: "ritik@gmail.com",
  },
  Sunny: {
    class: "bca",
    age: 21,
    cont: "87878787",
    email: "sunny@gmail.com",
  },
  sapna: {
    class: "b-tech",
    age: 19,
    cont: "7878787",
    email: "sapna@gmail.com",
  },
};

//  Deep cloning // deep copy
// 1. using JSON.parse(JSON.stringify(obj))
const std2 = JSON.parse(JSON.stringify(students));

//  2. using Lodash(package)
// deepCopy(obj)

// 3. structureClone() // JS es2020

const std3 = structuredClone(students);
std2.ritik.cont = 145784512;
std3.ritik.cont = 23232323232;

console.log("students1--", students);

console.log("students2--", std2);
console.log("students3--", std3);

const abj1 = { ...kia, ...students };

console.log("obj--", abj1);

const weeksWithDupes = [
  "Friday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Wednesday",
  "Wednesday",
  "Friday",
  "Friday",
];

const arr6 = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 8, 5, 6, 7, 1, 2, 3];

const arr7 = [...weeksWithDupes, ...arr6];

console.log("arr7--", arr7);

let a = 10;

const abc = () => {
  console.log("a 1---", a);

  if (2 + 2 === 4) {
    let a = 30;
    console.log("a 2---", a);
  }
  console.log("a 3---", a); //
};

console.log("a 4---", a);
abc();
console.log("a 5---", a);
