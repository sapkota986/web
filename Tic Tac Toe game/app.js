// Get all the boxes and buttons
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// Start with player O
let turnO = true;

// Count moves to check for draw
let count = 0;

// Winning positions
let winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

// When a box is clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Set text to O or X
    box.innerText = turnO ? "O" : "X";
    box.disabled = true;
    count++;
    
    // Check if someone won
    if (checkWinner()) return;

    // If 9 moves and no winner, it's a draw
    if (count === 9) {
      msg.innerText = "Game was a Draw.";
      msgContainer.classList.remove("hide");
    }

    // Switch turn
    turnO = !turnO;
  });
});

// Check who won
function checkWinner() {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].innerText;
    let b = boxes[pattern[1]].innerText;
    let c = boxes[pattern[2]].innerText;

    if (a && a === b && b === c) {
      msg.innerText = `Congratulations, Winner is ${a}`;
      msgContainer.classList.remove("hide");
      disableAllBoxes();
      return true;
    }
  }
  return false;
}

// Disable all boxes
function disableAllBoxes() {
  boxes.forEach((box) => box.disabled = true);
}

// Enable all boxes and clear text
function enableAllBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

// Reset game
function resetGame() {
  turnO = true;
  count = 0;
  enableAllBoxes();
  msgContainer.classList.add("hide");
}

// Button events
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
