const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

let isColored = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onStartButtonClick = () => {
  if (isColored) {
    return;
  }

  intervalId = setInterval(
    () =>
      (body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000,
  );
  isColored = true;
  startButton.setAttribute('disabled', 'disabled');
};

startButton.addEventListener('click', onStartButtonClick);

const onStopButtonClick = () => {
  clearInterval(intervalId);
  isColored = false;
  startButton.removeAttribute('disabled', 'disabled');
};

stopButton.addEventListener('click', onStopButtonClick);
