// let stocks = {
//     Fruits: ["Strawberry", "Grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// }

// // Promises
// let is_shop_open = true;

// let order = (time, work) => {

//     return new Promise((resolve, reject) => {

//         if (is_shop_open) {

//             setTimeout(() => {
//                 resolve(work());
//             }, time)
//         }

//         else {
//             reject(console.log("our shop is closed"))
//         }

//     })

// }

// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

//     .then(() => {
//         return order(0, () => console.log("production has started"))
//     })


//     .then(() => {
//         return order(2000, () => console.log("the fruit was chopped"))
//     })


//     .then(() => {
//         return order(1000, () => {
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//         })
//     })


//     .then(() => {
//         return order(1000, () => console.log("start the machine"));
//     })


//     .then(() => {
//         return order(2000, () => {
//             console.log(`ice cream was placed ${stocks.holder[0]}`)
//         })
//     })


//     .then(() => {
//         return order(3000, () => {
//             console.log(`${stocks.toppings[0]} was selected`);
//         })
//     })


//     .then(() => {
//         return order(2000, () => console.log("ice cream was served"));
//     })

//     .catch(() => {
//         console.log("customer left");
//     })


//     .finally(() => {
//         console.log("day ended, shop is closed");
//     });

/*
CALLBACK EXAMPLE
---------------------------------------------------------------------------

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

// PROMISE ALTERNATIVE OF EXAMPLE ABOVE
/*
let isBagEmpty = false;
let username = "helon";

let promise = new Promise((resolve, reject) => {
    if (isBagEmpty) {
        let schoolStuffs = ["books", "Pencils", "pens", "erasers"];
        let money = 200

        resolve({ schoolStuffs, money });
    } else {
        reject(`Hey ${username} you are ready to go to school`);
    }
});

promise.then((object) => {
    let schoolStuffs = object.schoolStuffs.join(", ");
    let money = object.money;

    console.log(`Hey ${username} take your ${schoolStuffs} and $${money} and go to school right Now!!`);
}).catch((message) => {
    console.log(message);
})
*/

const cart = ["shoes", "pants", "money"];

createOrder(cart)
    .then((orderId) => {
        console.log(orderId);
        return orderId;
    })
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("I must to succeed");
    })

function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {

        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err)
        }

        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }

    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("payment successful");
    })
}

function validateCart(cart) {
    return true;
}