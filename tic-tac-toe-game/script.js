const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turnO = true;
let moveCount = 0; // NEW: track total moves

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  moveCount = 0; // reset move count
  enabledBoxes();
  msgContainer.classList.add("hide");
};

const newGame = () => {
  turnO = true;
  moveCount = 0; // reset move count
  enabledBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    moveCount++; // increment move count

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const showDraw = () => {
  msg.innerText = "It's a Draw!";
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3) {
      showWinner(posVal1);
      return; // stop checking after winner
    }
  }

  // Draw condition
  if (moveCount === 9) {
    showDraw();
  }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
