"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "New York"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.courseCount = 1;
        this.city = "New York";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return "apple" + this.email;
    }
    get coursecount() {
        return this.courseCount;
    }
    set coursecount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this.courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this.courseCount = 4;
    }
}
const helon = new User("nguhelon", "helon");
// helon.city
