"use strict";
const groupByCategory = (items) => {
    const groupedItems = {};
    for (const item of items) {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    }
    return groupedItems;
};
// Example usage
const items = [
    { name: "Shirt", price: 20, category: "Clothing" },
    { name: "Jeans", price: 30, category: "Clothing" },
    { name: "Socks", price: 5, category: "Clothing" },
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Book", price: 15, category: "Books" }
];
const groupedItems = groupByCategory(items);
console.log(groupedItems);
