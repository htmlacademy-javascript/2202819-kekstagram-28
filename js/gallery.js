/*Создание галереи*/

import {openBigPicture} from './comment.js';
import {renderMiniatures} from './miniature.js';

const picturesContainer = document.querySelector('.pictures');

let pictures = [];

const onMiniatureClick = (evt) => {
  const activePicture = evt.target.closest('.picture');
  if (!activePicture) {
    return;
  }
  evt.preventDefault();
  const activePictureId = pictures.find((picture) => picture.id === +activePicture.dataset.id);
  openBigPicture(activePictureId);
};

const createGallery = (currentPictures) => {
  pictures = currentPictures;
  renderMiniatures(pictures);
  picturesContainer.addEventListener('click', onMiniatureClick);
};

export {createGallery};
