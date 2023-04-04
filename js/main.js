/*Точка входа*/

import {getData} from './api.js';
import {showAlert} from './util.js';
import {createGallery} from './gallery.js';
import {showFilters, setFilterClickHandler} from './filter.js';
import {closePictureUploadForm, onPictureUploadFormSubmit} from './form.js';

getData()
  .then((pictures) => {
    createGallery(pictures);
    showFilters();
    setFilterClickHandler(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

onPictureUploadFormSubmit(closePictureUploadForm);
