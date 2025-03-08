const canvas = document.querySelector('.etch-a-sketch');
const slider = document.querySelector('#squaresNumber');
const squaresValue = document.querySelector('#squaresValue');
squaresValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  squaresValue.textContent = e.target.value;
  createSquares(e.target.value);
});

function createSquares(squares) {
  canvas.innerHTML = '';
  let squareSize = canvas.clientWidth / squares;
  for (let i = 0; i < squares ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    canvas.appendChild(square);
  }
}
