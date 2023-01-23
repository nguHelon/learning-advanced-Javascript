"use strict";
const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const submitBtn = document.querySelector(".submit-btn");
const formDiv = document.querySelector(".inputs-div");
const messageDiv = document.querySelector(".message");
const taskContainer = document.querySelector(".task-container");
formDiv === null || formDiv === void 0 ? void 0 : formDiv.addEventListener("submit", (event) => {
    event.preventDefault();
});
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
    let nameValue = nameInput === null || nameInput === void 0 ? void 0 : nameInput.value;
    let descValue = descInput === null || descInput === void 0 ? void 0 : descInput.value;
    if (nameValue && descValue) {
        let article = document.createElement("article");
        article.classList.add("task");
        let contents = `
            <div class="task-info">
                <h1>${nameValue}</h1>
                <span>${descValue}</span>
            </div>
            <div class="actions">
                <button class="completed">Completed</button>
                <button class="delete">Delete</button>
            </div>
        `;
        article.innerHTML = contents;
        taskContainer === null || taskContainer === void 0 ? void 0 : taskContainer.appendChild(article);
        let completeBtns = document.querySelectorAll("article .completed");
        let deleteBtns = document.querySelectorAll("article .delete");
        completeBtns.forEach((button) => {
            button.addEventListener("click", completeTask);
        });
        deleteBtns.forEach((button) => {
            button.addEventListener("click", deleteTask);
        });
        displayMessage(`${nameValue} has been added successfully`, "success");
        reset();
    }
    else if ((!nameValue && descValue) || (nameValue && !descValue)) {
        if (!nameValue) {
            displayMessage("please fill the name input", "failed");
        }
        else if (!descValue) {
            displayMessage("please fill the description input", "failed");
        }
    }
    else {
        displayMessage("please fill all the inputs", "failed");
    }
});
function completeTask(e) {
    let currentTask = Array.from(e.target.parentElement.previousElementSibling.childNodes);
    let h1 = currentTask[1];
    let span = currentTask[3];
    h1.classList.add("completed");
    span.classList.add("completed");
}
function deleteTask(e) {
    let currentTask = e.target.parentElement.parentElement;
    currentTask.style.display = "none";
    displayMessage(`Task has been deleted`, "success");
}
function displayMessage(message, action) {
    messageDiv.innerHTML = message;
    if (action === "failed") {
        messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.classList.add(action);
    }
    else {
        messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.classList.add(action);
    }
    setTimeout(() => {
        messageDiv === null || messageDiv === void 0 ? void 0 : messageDiv.classList.remove(action);
    }, 2000);
}
function reset() {
    nameInput.value = "";
    descInput.value = "";
}
