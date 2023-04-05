/*Создание галереи*/

import {openBigPicture} from './comment.js';
import {renderMiniatures} from './miniature.js';

const picturesContainer = document.querySelector('.pictures');

const createGallery = (pictures) => {
  renderMiniatures(pictures);
  picturesContainer.addEventListener('click', (evt) => {
    const activePicture = evt.target.closest('.picture');
    if (activePicture) {
      evt.preventDefault();
      const activePictureId = pictures.find((picture) => picture.id === +activePicture.dataset.id);
      openBigPicture(activePictureId);
    }
  });
};

export {createGallery};
