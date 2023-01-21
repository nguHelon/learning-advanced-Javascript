// // Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1)

// //constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);
// console.log(another.draw());

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// `);

// const newCircle = new Circle1(1);

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log("I am a rectangle of " + this.width + " and " + this.height + " and I am " + this.color)
    }
}

let myRectangle1 = new Rectangle(4, 2, "blue");
let myRectangle2 = new Rectangle(3, 1, "red");
// console.log(myRectangle1.getArea());
// console.log(myRectangle2.printDescription());

class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
        this.numOfRequestForArea = 0;
    }

    // get area() {
    //     this.numOfRequestForArea++;
    //     return this.width * this.height;
    // }

    // set area(area) {
    //     this.width = Math.sqrt(area);
    //     this.height = this.width;
    // }

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }

    static isValidDimensions(width, height) {
        return width === height;
    }
}

let square1 = new Square(8);
let square2 = new Square(8);

// console.log(Square.isValidDimensions(5, 7))

// square1.area = 25;
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)

// console.log(square1.numOfRequestForArea);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        console.log("I am " + this.name + " and I am " + this.age + " years old");
    }
}

class Programmer extends Person {
    constructor(name, age, yearsOfExperience) {
        super(name, age);

        // Custom behaviour 
        this.yearsOfExperience = yearsOfExperience;
    }

    code() {
        console.log(this.name + " is programming");
    }
}

const programmers = [
    new Programmer('dom', 12, "1"),
    new Programmer('helon', 20, "1"),
]

function developmentSoftware(programmers) {
    // Develop software
    for (let programmer of programmers) {
        programmer.code();
    }
}

// developmentSoftware(programmers);

/* About polymorphism */

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log("wof wof");
    }
}

const a1 = new Animal("Dom");
const dog = new Dog('Jeff');

// a1.makeSound();
// dog.makeSound();