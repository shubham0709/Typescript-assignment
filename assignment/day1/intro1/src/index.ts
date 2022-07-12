let myname: string = "shubham";
let age: number = 23;
let isFetching: boolean = true;
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["shubham", "barore"];
let mytouple: [string, boolean];
mytouple = ["psycho", false];

// enum : named constants
enum people {
  Admin = "qwerty",
  SuperAdmin = "ASCII",
  User = "HP",
  SuperUser = "Control panel",
}

//function to take 2 args and return product;
function product(a: number, b: number): number {
  return a * b;
}
product(3, 4);

//function to take 2 args and return division
//if divisor is zero it returns zero;
function divide(a: number, b: number): number {
  return b !== 0 ? a / b : 0;
}
divide(10, 2);

// function takes a name as string
//prints it and returns nothing
function printname(str: string) {
  console.log(str);
}
