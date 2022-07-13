declare var shubham: string;
declare const variable: boolean;
declare const myfunction: (a: any, b: any) => any;
declare let firstname: string;
declare let lastname: string;
declare let fullname: string;
declare let mytouple: [string, number];
declare enum Myenum {
    color = "blue",
    favcar = "lambo",
    language = "c++"
}
declare function sum(a: number, b: number): number;
declare type person = {
    fname: string;
    lname: string;
    age: number;
};
declare function printperson({ fname, lname, age }: person): void;
declare let p: {
    fname: string;
    lname: string;
    age: number;
};
declare let output: (number | string | boolean)[];
declare function check(...args: any[]): void;
