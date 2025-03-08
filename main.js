const canvas = document.querySelector('.etch-a-sketch');

let squares = 4;

function createGrid(squares) {
  createRow;
}

let createRow = (squares) => {
  for (let i = 0; i <= squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    canvas.appendChild(square);
  }
};
createGrid(squares);
