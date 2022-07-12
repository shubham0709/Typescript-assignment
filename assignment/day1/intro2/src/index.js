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
let shubhamAdd = {
    houseNumber: 23,
    street: 41,
    city: "Mhow",
    state: "Madhya Pradesh",
    postalCode: 453441,
    country: "string",
};
var shubhamDetails = {
    prefix: "Mr",
    phones: [9993050082],
    addresses: [shubhamAdd],
    email: "shubham07barore@gmail.com",
    firstname: "shubham",
    lastname: "barore",
    middlename: "..",
};
var allPersons = [];
phoneBook(shubhamDetails);
function phoneBook(details) {
    allPersons.push(details);
}
console.log(allPersons);
