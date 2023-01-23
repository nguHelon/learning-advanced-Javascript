const nameInput = document.getElementById("name");
const descInput = document.getElementById("desc");
const submitBtn = document.querySelector(".submit-btn");
const formDiv = document.querySelector(".inputs-div");
const messageDiv = document.querySelector(".message");
const taskContainer = document.querySelector(".task-container");

formDiv?.addEventListener("submit", (event) => {
    event.preventDefault();
})

submitBtn?.addEventListener("click", () => {
    let nameValue: string = nameInput?.value;
    let descValue: string = descInput?.value;
    
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
        taskContainer?.appendChild(article);    
        
        let completeBtns = document.querySelectorAll("article .completed");
        let deleteBtns = document.querySelectorAll("article .delete");
        completeBtns.forEach((button): void => {
            button.addEventListener("click", completeTask);
        })
        
        deleteBtns.forEach((button): void => {
            button.addEventListener("click", deleteTask);
        })

        displayMessage(`${nameValue} has been added successfully`, "success");
        reset();

    } else if ((!nameValue && descValue) || (nameValue && !descValue)) {

        if (!nameValue) {
            displayMessage("please fill the name input", "failed");
        } else if (!descValue) {
            displayMessage("please fill the description input", "failed");
        }
        
    } else {
        displayMessage("please fill all the inputs", "failed");
    }
})

function completeTask(e: any): void {
    let currentTask = Array.from(e.target.parentElement.previousElementSibling.childNodes);
    let h1 = currentTask[1];
    let span = currentTask[3];
    h1.classList.add("completed");
    span.classList.add("completed");
}

function deleteTask(e: any): void {
    let currentTask = e.target.parentElement.parentElement;
    currentTask.style.display = "none";

    displayMessage(`Task has been deleted`, "success");
}

function displayMessage(message: string, action: string): void {
    messageDiv.innerHTML = message;

    if (action === "failed") {
        messageDiv?.classList.add(action);
    } else {
        messageDiv?.classList.add(action);
    }

    setTimeout((): void => {
        messageDiv?.classList.remove(action);
    }, 2000);
}

function reset(): void {
    nameInput.value = "";
    descInput.value = "";
}