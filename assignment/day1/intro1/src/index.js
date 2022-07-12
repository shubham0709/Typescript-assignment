let myname = "shubham";
let age = 23;
let isFetching = true;
let numArray = [1, 2, 3];
let strArray = ["shubham", "barore"];
let mytouple;
mytouple = ["psycho", false];
// enum : named constants
var people;
(function (people) {
    people["Admin"] = "qwerty";
    people["SuperAdmin"] = "ASCII";
    people["User"] = "HP";
    people["SuperUser"] = "Control panel";
})(people || (people = {}));
//function to take 2 args and return product;
function product(a, b) {
    return a * b;
}
product(3, 4);
//function to take 2 args and return division
//if divisor is zero it returns zero;
function divide(a, b) {
    return b !== 0 ? a / b : 0;
}
divide(10, 2);
// function takes a name as string
//prints it and returns nothing
function printname(str) {
    console.log(str);
}
