/*Изменение масштаба изображения*/

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;

const picturePreview = document.querySelector('.img-upload__preview img');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');

const scalePicture = (value) => {
  picturePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scalePicture(newValue);
};

smallerButton.addEventListener('click', onSmallerButtonClick);

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scalePicture(newValue);
};

biggerButton.addEventListener('click', onBiggerButtonClick);

const resetScale = () => scalePicture(DEFAULT_SCALE);

export {resetScale};
