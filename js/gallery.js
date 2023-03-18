/*Открытие и закрытие полноразмерных изображений*/

import {isEscapeKey} from './util.js';
import {renderMiniatures, photosContainer} from './miniature.js';
import {renderBigPhoto} from './big-photo.js';

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');/*hidden*/
const commentsLoaderButton = document.querySelector('.comments-loader');/*hidden*/

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPhotoClose.click();
  }
};

const openBigPhoto = (element) => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  commentsCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  renderBigPhoto(element);

  document.addEventListener('keydown', onDocumentKeydown);
};

photosContainer.addEventListener('click', (evt) => {
  const targetMiniature = evt.target.closest('.picture');
  if (targetMiniature) {
    evt.preventDefault();
    const targetMiniatureId = renderMiniatures[targetMiniature.dataset.id - 1];
    openBigPhoto(targetMiniatureId);
  }
});

const closeBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

bigPhotoClose.addEventListener('click', closeBigPhoto);
