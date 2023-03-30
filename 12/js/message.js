/*Сообщения при отправке данных*/

import {isEscapeKey} from './util.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const messageType = () => document.querySelector('.error, .success');

const closeMessage = () => {
  const message = messageType();
  if (message) {
    message.remove();
  }

  document.removeEventListener('click', onOutsideClick);
  document.removeEventListener('keydown', onMessageKeydown);
};

const openErrorMessage = () => {
  const error = errorTemplate.cloneNode(true);
  document.body.append(error);
  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeMessage);

  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onMessageKeydown);
};

const openSuccessMessage = () => {
  const success = successTemplate.cloneNode(true);
  document.body.append(success);
  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeMessage);

  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onMessageKeydown);
};

function onMessageKeydown (evt) {
  if (isEscapeKey(evt) && messageType()) {
    evt.preventDefault();
    closeMessage();
  }
}

function onOutsideClick (evt) {
  const type = messageType();
  if (evt.target === type) {
    closeMessage();
  }
}

export {messageType, openSuccessMessage, openErrorMessage};
