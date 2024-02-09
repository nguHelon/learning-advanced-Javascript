// Exercise 1: Using Index signatures
interface ObjectType {
    [key: string]: string | number;
}

const mergeObjects = (...Objects: ObjectType[]): ObjectType => {
    const mergedObjects: ObjectType = {};

    Objects.forEach((object) => {
        for (const eachObject in object) {
            if (!mergedObjects[eachObject]) {
                mergedObjects[eachObject] = object[eachObject];
            }
        }
    })

    return mergedObjects;
}


const obj1: ObjectType = { name: "John", age: 30 };
const obj2: ObjectType = { city:"New York", profession: "Engineer" };

const mergedObjects = mergeObjects(obj1, obj2);
console.log(mergedObjects);

// Exercise 2: Using Record Utility

type entitiesType = Record<string, number | string>;

const filterByType = (entities: entitiesType[], property: string, value: string | number): entitiesType[] => {
    const filteredEntities: entitiesType[] = [];

    entities.forEach((entity) => {
        for (const eachEntity in entity) {
            if (eachEntity == property && entity[eachEntity] == value) {
                filteredEntities.push(entity);
            }
        }
    })

    return filteredEntities;
}

const entities: entitiesType[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Alice", age: 35 },
    { id: 4, name: "Damian", age: 30 }
];

const filteredEntities = filterByType(entities, "age", 30);
console.log(filteredEntities);