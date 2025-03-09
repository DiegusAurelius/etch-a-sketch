const canvas = document.querySelector('.canvas');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  sliderValue.textContent = e.target.value;
  createSquares(e.target.value);
});

let setSquareSize = (value) => {
  return canvas.clientWidth / value;
};

function createSquares(value) {
  canvas.innerHTML = '';

  let light = 100;
  let squareSize = setSquareSize(value);

  for (let i = 0; i < value ** 2; i++) {
    const square = document.createElement('div');

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    canvas.appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `hsl(${
        Math.floor(Math.random() * 359) + 1
      }, 100%, ${(light -= 10)}%)`;
    });
  }
}

createSquares(slider.value);
