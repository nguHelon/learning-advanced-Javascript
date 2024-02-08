// Solved by chatGPT
type Item = {
    name: string,
    price: number,
    category: string
};

const groupByCategory = (items: Item[]): Record<string, Item[]> => {
    const groupedItems: Record<string, Item[]> = {};

    for (const item of items) {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    }

    return groupedItems;
};

// Example usage
const items: Item[] = [
    { name: "Shirt", price: 20, category: "Clothing" },
    { name: "Jeans", price: 30, category: "Clothing" },
    { name: "Socks", price: 5, category: "Clothing" },
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Book", price: 15, category: "Books" }
];

const groupedItems = groupByCategory(items);
console.log(groupedItems);
