// Practicing on async/await to manipulate promises
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
        console.log("contact me on nguhelon@gmail.com or view my github @nguhelon");
    })
*/

// Async/await equivalent of the above code
const cart = ["shoes", "bags", "pants", "mouse", "keyboard"];
const nbrOfItems = 2;


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

async function init() {
    try {
        let orderId = await createOrder();
        let orderId2 = await proceedToPayment(orderId);
        let orderSummary = await showOrderSummary(orderId2);
        console.log(orderSummary);
        let balance = await updateWallet();
        console.log(balance);
    }
    catch (err) {
        console.log(err);
    }
}

init();