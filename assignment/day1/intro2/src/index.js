let str = "shubham";
console.log(str);
function getName({ firstname, lastname }) {
    if (lastname) {
        return `${firstname}_${lastname}`;
    }
    else {
        return `${firstname}`;
    }
}
getName({ firstname: "david" });
getName({ firstname: "stephen", lastname: "morgan" });
//problem 5 : function that accepts person details
// pushes the details into array named as allPersons
let allPersons;
function phoneBook(details) {
    allPersons.push(details);
}
