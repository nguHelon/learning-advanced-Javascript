let stringArr = ['one', 'hey', 'helon']

let guitars = ['Strat', 'Les Paul', 5222]

let mixedData = ['EVH', 3232, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1234
guitars.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Helon', 232, true]

let mixed = ['John', 1, false]

myTuple[1] = 34

// Objects
let myObject: object
myObject = []
console.log(typeof(myObject))
myObject = bands
myObject = {}

const exampleObj = {
    prop1: 'Helon',
    prop2: true
}

exampleObj.prop1 = "John"

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1232, 32332, "OU334"]
}

let jp: Guitarist = {
    // name: 'Jimmy',
    active: true,
    albums: ["I", "II", "IV"]
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade)