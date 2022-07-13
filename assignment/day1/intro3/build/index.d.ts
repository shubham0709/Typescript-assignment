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
declare var firstUser: User;
declare var firstAdmin: Admin;
declare function getType(inputGiven: User | Admin): "user" | "admin";
