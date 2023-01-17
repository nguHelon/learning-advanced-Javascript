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

    protected courseCount = 1
    
    readonly city: string = "New York"

    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
       
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return "apple" + this.email;
    }

    get coursecount(): number {
        return this.courseCount;
    }

    set coursecount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }

        this.courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this.courseCount = 4;
    }
}

const helon = new User("nguhelon", "helon");
// helon.city
