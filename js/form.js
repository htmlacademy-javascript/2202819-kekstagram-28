/*Формы загрузки и редактирования изображения*/

import {sendData} from './api.js';
import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {uploadUserPicture} from './upload-user-picture.js';
import {getMessageType, openErrorMessage, openSuccessMessage} from './message.js';
import {isTextFieldFocused, pristineValidate, pristineReset} from './form-validation.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const pictureUploadForm = document.querySelector('.img-upload__form');
const pictureEditForm = pictureUploadForm.querySelector('.img-upload__overlay');
const pictureUploadButton = pictureUploadForm.querySelector('.img-upload__input');
const pictureCloseButton = pictureUploadForm.querySelector('.img-upload__cancel');
const submitButton = pictureEditForm.querySelector('.img-upload__submit');

const openPictureUploadForm = () => {
  pictureEditForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadUserPicture();

  document.addEventListener('keydown', onDocumentKeydown);
};

pictureUploadButton.addEventListener('change', openPictureUploadForm);

const closePictureUploadForm = () => {
  pictureUploadForm.reset();
  resetScale();
  resetEffects();
  pristineReset();
  pictureEditForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

pictureCloseButton.addEventListener('click', closePictureUploadForm);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onPictureUploadFormSubmit = () => {
  pictureUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if(pristineValidate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(openSuccessMessage)
        .then(closePictureUploadForm)
        .catch(
          () => {
            openErrorMessage();
          }
        )
        .finally(unblockSubmitButton);
    }
  });
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !getMessageType()) {
    evt.preventDefault();
    closePictureUploadForm();
  }
}

export {closePictureUploadForm, onPictureUploadFormSubmit};
