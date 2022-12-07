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

// let stocks = {
//     Fruits: ["Strawberry", "Grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// }

// more callback examples
/*
let isBagEmpty = true;
let username = "Helon";

function checkBag(emptyBag, fullBag) {
    if (isBagEmpty) {
        emptyBag({
            schoolFurniture: ["Books", "pencils", "pens", "erasers"],
            money: 200
        })
    } else {
        fullBag(`Hey ${username} You are ready to go to school`);
    }
}


checkBag((object) => {
    let schoolStuffs = object.schoolFurniture.join(", ");
    let money = object.money;

    console.log(`Hey ${username} take your ${schoolStuffs} and $${money} and go to school right Now!!!`);
}, (message) => {
    console.log(message);
});

*/

// A promise example which I want to convert to a callback in order to understand something more
/* 
const cart = ["shoes", "bags", "pants", "mouse", "keyboard"];
const nbrOfItems = 3;


const userOrder = (nbrOfItems) => {
    let userCart = [];
    if (nbrOfItems < 5) {
        for (let i = 0; i <= nbrOfItems; i++) {
            userCart.push(cart[i]);
        }
        return userCart;
    } else {
        return "can not place order with that amount of items";
    }
}

const validateOrder = () => {
    let order = userOrder(nbrOfItems);
    if (order.length == nbrOfItems + 1) {
        return true;
    } else {
        return order;
    }
}

const createOrder = () => {
    return new Promise((resolve, reject) => {
        let orderState = validateOrder();
        if (orderState == true) {
            let orderId = new Date().getTime();
            resolve(orderId);
        } else {
            reject(orderState);
        }
    })
}

const proceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        if (orderId) {
            setTimeout(() => {
                console.log("payment successful");
                resolve(orderId);
            }, 1500);
        }
    })
}

const showOrderSummary = (orderId) => {
    return new Promise((resolve, reject) => {
        console.log(`showing order for orderId: ${orderId}`);
        let cart = userOrder(nbrOfItems);
        let newCart = cart.map((item) => {
            return `${item}`;
        });
        cart.join(", ")
        resolve(`you ordered ${newCart}`);
    })
}

const updateWallet = () => {
    return new Promise((resolve, reject) => {
        resolve("your balance is whatever you spent 🤣");
    })
}

createOrder()
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((orderId) => {
        return showOrderSummary(orderId);
    })
    .then((orderSummary) => {
        console.log(orderSummary);
        return updateWallet();
    })
    .then((balance) => {
        console.log(balance);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("we'er done here");
    })

*/

const cart = ["shoes", "bags", "pants", "mouse", "keyboard"];
const nbrOfItems = 4;


const userOrder = (nbrOfItems) => {
    let userCart = [];
    if (nbrOfItems < 5) {
        for (let i = 0; i <= nbrOfItems; i++) {
            userCart.push(cart[i]);
        }
        return userCart;
    } else {
        return "can not place order with that amount of items";
    }
}

const validateOrder = () => {
    let order = userOrder(nbrOfItems);
    if (order.length == nbrOfItems + 1) {
        return true;
    } else {
        return order;
    }
}

const createOrder = (validateOrder, proceedToPayment) => {
    let orderState = validateOrder();
    if (orderState == true) {
        let orderId = new Date().getTime();
        proceedToPayment(orderId);
    } else {
        console.log(orderState);
    }

}

const proceedToPayment = (orderId, showOrderSummary) => {
    if (orderId) {
        setTimeout(() => {
            console.log("payment successful");
            showOrderSummary(orderId);
        }, 1500);
    }
}

const showOrderSummary = (orderId, updateWallet) => {
    console.log(`showing order for orderId: ${orderId}`);
    let cart = userOrder(nbrOfItems);
    let newCart = cart.map((item) => {
        return `${item}`;
    });
    cart.join(", ")
    console.log(`you ordered ${newCart}`);
    updateWallet();
}

const updateWallet = () => {
    console.log("your balance is your wallet money substracted by whatever you spent 🤣");
}

createOrder(validateOrder, (orderId) => {
    proceedToPayment(orderId, (orderId) => {
        showOrderSummary(orderId, () => {
            updateWallet();
        })
    })
})