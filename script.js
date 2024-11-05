const gameBoard = document.getElementById("gameBoard");
const statusText = document.getElementById("status");
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.innerText = `Player ${currentPlayer} wins!`;
            isGameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "It's a draw!";
        isGameActive = false;
    }
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute("data-index");

    if (board[cellIndex] !== "" || !isGameActive) return;

    board[cellIndex] = currentPlayer;
    event.target.innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (isGameActive) {
        statusText.innerText = `Player ${currentPlayer}'s turn`;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    statusText.innerText = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll(".cell").forEach(cell => (cell.innerText = ""));
}

gameBoard.addEventListener("click", handleCellClick);
resetGame();
