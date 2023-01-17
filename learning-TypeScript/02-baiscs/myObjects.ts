// const user = {
//     name: "Ngu Helon",
//     email: "nguhelon@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "helon", isPaid: false, email:"h@h"}

// createUser(newUser);

// function createCourse():{name: string, price: number} {
//     return {name: "reactjs", price: 399};
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User {
//     return {name: "", email: "", isActive: true};
// }

// createUser({name: "", email: "", isActive: true})

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcarDetails?: number
}

let myUser: User = {
   _id: "1234",
   name: "h",
   email: "h@h.com",
   isActive: false 
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.name = "ngu helon";
// myUser._id = "123";

export {}