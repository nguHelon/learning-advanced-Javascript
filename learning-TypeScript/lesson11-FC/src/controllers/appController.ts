import { ListItem } from "../model/AppModel";

const saveToLocalStorage = (fullList: ListItem[]): void => {
    localStorage.setItem("myItems", JSON.stringify(fullList));
}

const loadItems = (fullList: ListItem[]): void => {
    const storedList: string | null = localStorage.getItem("myItems");
    if (typeof storedList !== "string") return;

    const parsedList = JSON.parse(storedList);

    parsedList.forEach((item: ListItem): void => {
        addItem(item, fullList);
    })

}

const clearList = (fullList: any): void => {
    fullList = [];
    saveToLocalStorage(fullList);
}

const addItem = (itemObj: ListItem, fullList: ListItem[]): void => {
    fullList.push(itemObj);
    saveToLocalStorage(fullList);
}

const removeItem = (id: string, fullList: ListItem[]): void => {
    const newList: ListItem[] = fullList.filter((list: ListItem) => list.id !== id);
    console.log(newList);
    saveToLocalStorage(newList);
}

export {
    loadItems,
    clearList,
    addItem,
    removeItem
}