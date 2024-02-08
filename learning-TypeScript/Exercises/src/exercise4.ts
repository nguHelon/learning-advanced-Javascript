// type Item = {
//     name: string,
//     price: number,
//     category: string
// };

// const calculateAveragePrice = (items: Item[]): Record<string, number> => {
//     const sumByCategory: Record<string, { sum: number; count: number }> = {};

//     for (const item of items) {
//         if (!sumByCategory[item.category]) {
//             sumByCategory[item.category] = { sum: 0, count: 0 };
//         }
//         sumByCategory[item.category].sum += item.price;
//         sumByCategory[item.category].count++;
//     }

//     const averagePrices: Record<string, number> = {};
//     for (const category in sumByCategory) {
//         const { sum, count } = sumByCategory[category];
//         averagePrices[category] = parseFloat((sum / count).toFixed(2));
//     }

//     return averagePrices;
// };

// // Example usage
// const items: Item[] = [
//     { name: "Shirt", price: 20, category: "Clothing" },
//     { name: "Jeans", price: 30, category: "Clothing" },
//     { name: "Socks", price: 5, category: "Clothing" },
//     { name: "Laptop", price: 1000, category: "Electronics" },
//     { name: "Phone", price: 500, category: "Electronics" },
//     { name: "Book", price: 15, category: "Books" }
// ];

// const averagePrices = calculateAveragePrice(items);
// console.log(averagePrices);
