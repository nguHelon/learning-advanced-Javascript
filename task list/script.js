const form = document.querySelector(".container .inputs-div");
const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const taskContainer = document.querySelector(".container .task-container");
const addTaskBtn = document.querySelector(".container .inputs-div .submit-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

//Trying JavaScript Classes
class task {
    constructor(nameValue, descValue, article, content, id) {
        this.nameValue = nameValue;
        this.descValue = descValue;
        this.article = article;
        this.content = content;
        this.id = id;
    }

    completedTask(e) {
        const nameValue = e.currentTarget.parentElement.previousElementSibling.firstElementChild;
        const descValue = e.currentTarget.parentElement.previousElementSibling.lastElementChild;

        nameValue.classList.add("completed");
        descValue.classList.add("completed");
    }

    deleteTask(e) {
        const task = e.currentTarget.parentElement.parentElement;

        task.style.display = "none";
    }
}

const taskFunctions = (function () {
    function taskMaker(nameValue, descValue, article, content, id) {
        let newTask = new task(nameValue, descValue, article, content, id);
        newTask.content = `
            <div class="task-info">
                <h1>${newTask.nameValue}</h1>
                <span>${newTask.descValue}</span>
            </div>
            <div class="actions">
                <button class="completed">Completed</button>
                <button class="delete">Delete</button>
            </div>
        `;
        newTask.article.classList.add("task");
        newTask.article.setAttribute("data-id", "");
        newTask.article.innerHTML = newTask.content;
        taskContainer.appendChild(newTask.article);

        let completeBtn = newTask.article.querySelector(".actions .completed");
        let deleteBtn = newTask.article.querySelector(".actions .delete");
        completeBtn.addEventListener("click", newTask.completedTask);
        deleteBtn.addEventListener("click", newTask.deleteTask);
    }

    function getFromLocalStorage() {
        const list = (localStorage.getItem("list") === null) ? [] : JSON.parse(localStorage.getItem("list"));
        return list;
    }

    function addToLocalStorage(nameValue, descValue, id) {
        const list = getFromLocalStorage();
        const newTask = { nameValue, descValue, id };
        list.push(newTask);

        localStorage.setItem("list", JSON.stringify(list));
    }

    function removeFromLocalStorage(id) {
        const list = getFromLocalStorage();
        const newList = list.filter((item) => {
            if (item.id != id) {
                return item;
            }
        });

        localStorage.setItem("list", JSON.stringify(newList));
    }

    return {
        taskMaker,
        addToLocalStorage,
        removeFromLocalStorage
    }
})();


addTaskBtn.addEventListener("click", () => {
    let content = ``;
    let nameValue = nameInput.value;
    let descValue = descInput.value;
    let article = document.createElement("article");
    let id = new Date();
    id = id.getTime();
    taskFunctions.taskMaker(nameValue, descValue, article, content, id);
});