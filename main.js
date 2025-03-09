const canvas = document.querySelector('.canvas');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
let light = 100;

sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  light = 100;
  canvas.innerHTML = '';
  createSquares(e.target.value);
});

canvas.addEventListener('mouseover', (e) => {
  e.target.style.backgroundColor = `hsl(${
    Math.floor(Math.random() * 360) + 1
  }, 100%, ${(light -= 10)}%)`;
});

function setSquareSize(value) {
  return canvas.clientWidth / value;
}

function createSquares(value) {
  let squareSize = setSquareSize(value);

  for (let i = 0; i < value ** 2; i++) {
    const square = document.createElement('div');

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    canvas.appendChild(square);
  }
}

createSquares(slider.value);
