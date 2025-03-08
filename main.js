const canvas = document.querySelector('.etch-a-sketch');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');
sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  createSquares(e.target.value);
});

canvas.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = `hsl(${
    Math.floor(Math.random() * 359) + 1
  }, 85%, 50%)`;
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

createSquares(slider.value);
