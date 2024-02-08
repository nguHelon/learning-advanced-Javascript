type cartType = {
    name: string,
    price: number
}

const shoppingCart: cartType[] = [
    { name: "Shirt", price: 20 },
    { name: "Jeans", price: 30 },
    { name: "Socks", price: 5 }
];

const calculateTotalPrice = (cart: cartType[]): number => {
    return cart.reduce((totalPrice, item) => totalPrice + item.price, 0);
}

console.log(calculateTotalPrice(shoppingCart))