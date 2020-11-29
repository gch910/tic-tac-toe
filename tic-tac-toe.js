window.addEventListener("DOMContentLoaded", (event) => {
  const count = 0;

  let currentPlayerSymbol = "x";

  const board = document.getElementById("tic-tac-toe-board");
  const x = document.createElement("img");
  const o = document.createElement("img");
  x.src = "./images/player-x.svg";
  o.src = "./images/player-o.svg";

  board.addEventListener("click", (e) => {
    const squareId = e.target.id;
    if(squareId.includes('square')) {
        e.target.appendChild(x);
    }
  });
});
