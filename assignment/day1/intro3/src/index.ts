interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

var firstUser: User = {
  type: "user",
  name: "donalds",
  age: 23,
  occupation: "coder",
};

var firstAdmin: Admin = {
  type: "admin",
  name: "root user",
  age: 20,
  role: "database admin",
};

function getType(inputGiven) {
  return inputGiven.type;
}

console.log(getType(firstUser));
console.log(getType(firstAdmin));
