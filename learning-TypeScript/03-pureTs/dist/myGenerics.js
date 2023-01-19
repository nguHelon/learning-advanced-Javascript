"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityfour(val) {
    return val;
}
// identityfour<bottle>({brand: "hello", type: 4});
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
