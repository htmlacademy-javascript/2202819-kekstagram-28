/*Отрисовка и загрузка комментариев. Открытие и закрытие полноразмерных изображений*/

import {isEscapeKey} from './util.js';
import {renderMiniatures, photosContainer} from './miniature.js';
import {renderBigPhoto} from './big-photo.js';

const COMMENTS_BLOCK = 5;

const bigPhoto = document.querySelector('.big-picture');
const bigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');
const commentsContainer = bigPhoto.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');
const commentsCount = bigPhoto.querySelector('.social__comment-count');
const commentsLoaderButton = bigPhoto.querySelector('.comments-loader');

let commentsLoaded = 0;
let comments = [];

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPhotoClose.click();
  }
};

const renderComment = (({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const renderComments = () => {
  commentsLoaded += COMMENTS_BLOCK;

  if (commentsLoaded >= comments.length) {
    commentsLoaderButton.classList.add('hidden');
    commentsLoaded = comments.length;
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
  const commentsFragment = document.createDocumentFragment();
  for (let i = 0; i < commentsLoaded; i++) {
    const commentElement = renderComment(comments[i]);
    commentsFragment.append(commentElement);
  }
  commentsContainer.innerHTML = '';
  commentsContainer.append(commentsFragment);
  commentsCount.innerHTML = `${commentsLoaded} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const openBigPhoto = (element) => {
  bigPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderBigPhoto(element);
  comments = element.comments;
  commentsLoaded = 0;
  renderComments();

  document.addEventListener('keydown', onDocumentKeydown);
};

const onCommentsLoaderButtonClick = () => renderComments();
commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);

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
