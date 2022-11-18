const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const submitBtn = document.querySelector(".submit-btn");
const taskContainer = document.querySelector(".task-container");
const message = document.querySelector(".message");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

window.addEventListener("DOMContentLoaded", loadItemsOnPageLoad);

submitBtn.addEventListener("click", () => {
    const nameValue = nameInput.value;
    const descValue = descInput.value;
    const id = new Date().getTime().toString();

    if (nameValue && descValue) {


        createListItem(id, nameValue, descValue);

        alertMessage("success", `${nameValue} was added successfully`);

        nameInput.value = "";
        descInput.value = "";
        addToLocalStorage(id, nameValue, descValue);

    } else if (!nameValue && !descValue) {
        alertMessage("failed", "please fill all inputs");
    } else if (!nameValue || !descValue) {
        const array = [nameInput, descInput];
        const newArray = array.filter((item) => {
            if (!item.value) {
                return item;
            }
        });
        newArray.forEach((item) => {
            if (item.value === nameValue) {
                alertMessage("failed", "please fill the name input");
            } else {
                alertMessage("failed", "please fill the description input");
            }
        });
    }
});

const deleteItem = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    taskContainer.removeChild(element);
    alertMessage("success", `Task was removed succesfully`);
    removeFromLocalStorage(id);
}

const completedTask = (e) => {
    const taskInfoParent = e.currentTarget.parentElement.previousElementSibling;
    const h1 = taskInfoParent.childNodes[1];
    const span = taskInfoParent.childNodes[3];
    h1.classList.add("completed");
    span.classList.add("completed");
}

// alert message
function alertMessage(className, text) {
    message.classList.add(`${className}`);
    message.textContent = text;

    setTimeout(() => {
        message.classList.remove(`${className}`);
    }, 1500);
}

function addToLocalStorage(id, nameValue, descValue) {
    const newItem = { id, nameValue, descValue };
    const items = getFromLocalStorage();
    items.push(newItem);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    const items = getFromLocalStorage();
    const filteredItems = items.filter((item) => {
        return item.id !== id;
    });
    localStorage.setItem("list", JSON.stringify(filteredItems));
}

function getFromLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

function loadItemsOnPageLoad() {
    const items = getFromLocalStorage();
    items.forEach((item) => {
        createListItem(item.id, item.nameValue, item.descValue);
    });
}

function createListItem(id, nameValue, descValue) {
    const element = document.createElement("article");
    element.setAttribute("data-id", id);
    element.classList.add("task");
    element.innerHTML = `
            <div class="task-info">
                <h1>${nameValue}</h1>
                <span>${descValue}</span>
            </div>
            <div class="actions">
                <button class="completed">Completed</button>
                <button class="delete">Delete</button>
            </div>
        `;

    const deleteBtn = element.querySelector('.delete');
    const completeBtn = element.querySelector('.completed');
    deleteBtn.addEventListener("click", deleteItem);
    completeBtn.addEventListener("click", completedTask);

    taskContainer.appendChild(element);
}