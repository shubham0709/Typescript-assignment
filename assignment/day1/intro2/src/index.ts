let str: string = "shubham";
console.log(str);

// problem 1
interface objInterface {
  title: string;
  status: boolean;
  id: number;
}

//problem 2 : accpet first(requirede) and lastname(optional)
// then return the full name
// type userfullname = { firstname: string; lastname?: string };
interface userfullname {
  firstname: string;
  lastname?: string;
}
function getName({ firstname, lastname }: userfullname): string {
  if (lastname) {
    return `${firstname}_${lastname}`;
  } else {
    return `${firstname}`;
  }
}
getName({ firstname: "david" });
getName({ firstname: "stephen", lastname: "morgan" });

//problem 3: address interface

interface Address {
  houseNumber: number;
  street: number;
  city: string;
  state: string;
  postalCode: number;
  country: string;
}

//problem 4 : person details interface
interface personDetails {
  prefix?: string;
  phones: number[];
  addresses: Address[];
  email?: string;
  firstname: string;
  lastname: string;
  middlename?: string;
}

//problem 5 : function that accepts person details
// pushes the details into array named as allPersons
let allPersons: personDetails[];
function phoneBook(details: personDetails) {
  allPersons.push(details);
}
