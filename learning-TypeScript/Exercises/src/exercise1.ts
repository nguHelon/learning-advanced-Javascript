// Exercise 1: Basic Types
let username: string = "MyName";
let age: number = 22;
let isStudent: boolean = false;

// Exercise 2: Type Annotations
const greet = (name: string): string => {
    return `Hello ${name}`;
}

// Exercise 3: Union Types
let result: number | string = "Your result";

// Exercise 4: Arrays and Tuples
const numbersArray: number[] = [1, 2, 3];
const tupleExample: [string, number, boolean] = ["string", 22, true];

// Exercise 5: Objects
interface Person {
    name: string,
    age: number,
    isStudent: boolean
}

const myObj: Person = {
    name: "MyName",
    age: 22,
    isStudent: true
}