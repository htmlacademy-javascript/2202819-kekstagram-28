/*Отрисовка комментариев*/

import {isEscapeKey} from './util.js';
import {renderBigPicture} from './big-picture.js';

const COMMENTS_BLOCK = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
const commentTemplate = commentsContainer.querySelector('.social__comment');

let commentsLoaded = 0;
let comments = [];

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

const openBigPicture = (element) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderBigPicture(element);
  comments = element.comments;
  commentsLoaded = 0;
  renderComments();

  document.addEventListener('keydown', onDocumentKeydown);
};

const onCommentsLoaderButtonClick = () => renderComments();
commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

bigPictureClose.addEventListener('click', closeBigPicture);

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export {openBigPicture};
