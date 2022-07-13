declare let str: string;
interface objInterface {
    title: string;
    status: boolean;
    id: number;
}
interface userfullname {
    firstname: string;
    lastname?: string;
}
declare function getName({ firstname, lastname }: userfullname): string;
interface Address {
    houseNumber: number;
    street: number;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface personDetails {
    prefix?: string;
    phones: number[];
    addresses: Address[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare let shubhamAdd: Address;
declare var shubhamDetails: personDetails;
declare var allPersons: personDetails[];
declare function phoneBook(details: personDetails): void;
