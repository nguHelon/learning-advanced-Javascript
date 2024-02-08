// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal types
let myName: 'Helon'

let userName: 'Dave' | 'John' | 'Helon'
userName = 'Helon'

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello')
logMsg(add(3, 5))

let substract = function (c: number, d: number): number {
    return c - d;
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multipy: mathFunction = function(c, d) {
    return c * d;
}

logMsg(multipy(2, 2))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
logMsg(sumAll(undefined, 3))

//Rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while(true) {
        i++
        if (i > 100) break
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of the never type
const numberOrString = (value: number | string): string => {
    if (isNumber(value)) return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!');
}