const canvas = document.querySelector('.canvas');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');
let light = 100;

sliderValue.textContent = slider.value;

slider.addEventListener('input', (e) => {
  light = 100;
  sliderValue.textContent = e.target.value;
  createSquares(e.target.value);
});

let setSquareSize = (num) => {
  return canvas.clientWidth / num;
};

function createSquares(num) {
  canvas.innerHTML = '';

  let squareSize = setSquareSize(num);

  for (let i = 0; i < num ** 2; i++) {
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
