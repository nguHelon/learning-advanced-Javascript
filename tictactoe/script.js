const XClass = 'x';
const circleClass = 'circle';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let circleTurn;

startGame();

function startGame() {
    circleTurn = false;
    cellElements.forEach((cell) => {
        cell.addEventListener("click", handleClick, { once: true });
    })
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? circleClass : XClass;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    }
    // placeMark
    // Check for win
    // check for draw
    // switch turns
    swapTurns();
    setBoardHoverClass();
}

function endGame(draw) {
    if (draw) {

    } else {
        // winningMessageTextElement.innerText = `${circleTUrn ? "O"}`
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    board.classList.remove(XClass);
    board.classList.remove(circleClass);
    if (circleTurn) {
        board.classList.add(circleClass);
    } else {
        board.classList.add(XClass);
    }
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}