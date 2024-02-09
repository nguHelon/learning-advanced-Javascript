"use strict";
const mergeObjects = (...Objects) => {
    const mergedObjects = {};
    Objects.forEach((object) => {
        for (const eachObject in object) {
            if (!mergedObjects[eachObject]) {
                mergedObjects[eachObject] = object[eachObject];
            }
        }
    });
    return mergedObjects;
};
const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", profession: "Engineer" };
const mergedObjects = mergeObjects(obj1, obj2);
console.log(mergedObjects);
const filterByType = (entities, property, value) => {
    const filteredEntities = [];
    entities.forEach((entity) => {
        for (const eachEntity in entity) {
            if (eachEntity == property && entity[eachEntity] == value) {
                filteredEntities.push(entity);
            }
        }
    });
    return filteredEntities;
};
const entities = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 35 },
    { id: 4, name: "Damian", age: 30 }
];
const filteredEntities = filterByType(entities, "age", 30);
console.log(filteredEntities);
