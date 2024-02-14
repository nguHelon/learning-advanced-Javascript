const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John' }))
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if(Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg}
}

//////////////////////////////////////////////

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {
    // process the user with logichere
    return user
}

console.log(processUser({ id: 1, name: 'Helon'}))
// console.log(processUser({name: 'Helon'}))

const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        id: 1,
        username: "user1",
        email: "user1@gmail.com"
    },
    {
        id: 2,
        username: "user2",
        email: "user2@gmail.com"
    }
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject("John")
console.log(store.state)
store.state = "Helon"
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Helon', 23, true])
console.log(myState.state)