var shubham: string = "shubham";
const variable: boolean = false;

const myfunction = (a, b) => {
  return a + b;
};
let firstname: string = "shubham";
let lastname: string = "barore";
let fullname = `${firstname}_${lastname}`;

// touple is used for fixed length and fixed data type of each index.
let mytouple: [string, number];
mytouple.push("shubham");
mytouple.push(23);
console.log(mytouple[0]);

enum Myenum {
  color = "blue",
  favcar = "lambo",
  language = "c++",
}

function sum(a: number, b: number): number {
  return a + b;
}

type person = { fname: string; lname: string; age: number };

function printperson({ fname, lname, age }: person) {
  console.log(fname, lname, age);
}
let p = {
  fname: "shubham",
  lname: "barore",
  age: 23,
};
printperson(p);

let output: (number | string | boolean)[];
output.push("shubham");
output.push(23);
output.push(false);

function check(...args) {
  console.log(typeof args);
}

check(100);
