import { ListItem } from "../model/AppModel";
import { removeItem } from "./appController";

const clearUlElement = (ul: HTMLUListElement): void => {
    ul.innerHTML = "";
}

const render = (ul: HTMLUListElement, fullList: ListItem[]): void => {

    fullList.forEach((item: ListItem): void => {

        const li = document.createElement("li") as HTMLLIElement;
        li.className = "item";

        const input = document.createElement("input") as HTMLInputElement;
        input.type = "checkbox";
        input.checked = item.checked;
        input.id = item.id;
        li.append(input);

        const label = document.createElement("label") as HTMLLabelElement;
        label.htmlFor = item.id;
        label.textContent = item.item;
        li.append(label);

        const button = document.createElement("button") as HTMLButtonElement;
        button.className = "button"
        button.textContent = "X"
        li.append(button);

        button.addEventListener("click", (): void => {
            removeItem(item.id, fullList)
            render(ul, fullList);
        })

        ul.append(li);
    })    

}

export {
    render,
    clearUlElement
}