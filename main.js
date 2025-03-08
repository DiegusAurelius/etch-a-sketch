const canvas = document.querySelector('.etch-a-sketch');
let squares = 16;

function createSquares(squares) {
  let squareSize = canvas.clientWidth / squares;
  for (let i = 0; i < squares ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    canvas.appendChild(square);
  }
}

createSquares(squares);
