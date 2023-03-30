/*Точка входа*/

import {getData} from './api.js';
import {showAlert} from './util.js';
import {createGallery} from './gallery.js';
import {onPictureUploadFormSubmit, closePictureUploadForm} from './form.js';

getData()
  .then((pictures) => {
    createGallery(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

onPictureUploadFormSubmit(closePictureUploadForm);
