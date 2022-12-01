// Synchronous code examples
/*
console.log(" I ");

console.log(" eat ");

console.log(" spoon ");

console.log(" ice cream ");

console.log(" with a ");

*/

// Asynchronous code example: the output shows that the code example is asynchronous because the setTimeout() function does not prevent the next lines of code.

/* console.log(" I ");

console.log(" eat ");

setTimeout(() => {
    console.log(" ice cream ");
}, 4000);

console.log(" with a ");

console.log(" spoon ");

*/

// Callback functions

/*function one(call_two) {
    call_two();
    console.log("step 1 complete. please call step 2");
}

function two() {
    console.log("step 2");
}

one(two);
*/

// Example used to understand callback functions

/*
let stocks = {
    Fruits: ["Strawberry", "Grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

let order = (Fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);

        call_production();
    }, 2000);
}

// good illustration for a callback hell

let production = () => {

    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log("the fruit have been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("the machine has been started");

                    setTimeout(() => {
                        console.log(`ice cream place on ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                console.log("serve ice cream");
                            }, 2000)
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);

}

order(0, production);
*/

// Learning more about callbacks
/*const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {

    api.proceddToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet();
        })

    }
    )

})
*/

// Personal example of call backs
// say we want to create a program for a sandwich maker
// * need the bread, tomato, lettuce, bacon, cheese, mayo, meat, fries
// * we need to chop the bread and ingredients
// * we also need to place the ingredients on the bread
// * we also need to rub the mayo on it

/*let type = ["vegetarian", "not vegetarian"];
let ingredients = ["bread", "tomato", "lettuce", "bacon", "cheese", "mayo", "meat", "fries"];
let vegetarianIngredient = ["bread", "tomato", "lettuce", "cheese", "mayo", "fries"];

let maker = (type) => {
    sandWichType(type, function () {

        selectingredients(ingredients, function () {

            chopper(ingredients, function () {

                ingredientPlacer(ingredients, function () {

                    finish(ingredients, function () {

                        Serve();
                    })
                })
            })

        })
    })
}
*/

let stocks = {
    Fruits: ["Strawberry", "Grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

// Promises
let is_shop_open = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {

            setTimeout(() => {
                resolve(work());
            }, time)
        }

        else {
            reject(console.log("our shop is closed"))
        }

    })

}

order(2000, () => console.log(`${stocks.Fruits[0]}`));