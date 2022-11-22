const form = document.querySelector(".container .inputs-div");
const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const taskContainer = document.querySelector(".container .task-container");
const addTaskBtn = document.querySelector(".container .inputs-div .submit-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

addTaskBtn.addEventListener("click", () => {
    let nameValue = nameInput.value;
    let descValue = descInput.value;
    let article = document.createElement("article");
    article.classList.add("task");
    let content = `
        <div class="task-info">
            <h1>${nameValue}</h1>
            <span>${descValue}</span>
        </div>
        <div class="actions">
            <button class="completed">Completed</button>
            <button class="delete">Delete</button>
        </div>
    `;
    article.innerHTML = content;
    taskContainer.appendChild(article);
})