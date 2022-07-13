var firstUser = {
    type: "user",
    name: "donalds",
    age: 23,
    occupation: "coder",
};
var firstAdmin = {
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
//# sourceMappingURL=index.js.map