import './css/style.css'
import { addItem, clearList, loadItems } from './controllers/appController'
import { clearUlElement, render } from './controllers/template'
import { ListItem } from './model/AppModel';

const fullList: ListItem[] = [];
const ul = document.getElementById("listItems") as HTMLUListElement;

const initApp = (): void => {
  const form = document.getElementById("itemEntryForm") as HTMLFormElement;
  const inputElement = document.getElementById("newItem") as HTMLInputElement;

  form.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();

    const inputText = inputElement.value.trim();
    const itemId = fullList.length + 1;
    const itemObj: ListItem = { id: itemId.toString(), item: inputText, checked: false };

    addItem(itemObj, fullList);

    render(ul, fullList)
  })
  
  const clearBtn = document.getElementById("clearItemsButton") as HTMLButtonElement;
  
  clearBtn.addEventListener("click", (): void => {
    clearList(fullList);
    clearUlElement(ul);
  })

  loadItems(fullList);
  render(ul, fullList);
}

document.addEventListener("DOMContentLoaded", initApp);