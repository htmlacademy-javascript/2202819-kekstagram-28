/*Точка входа*/

import {getData} from './api.js';
import {showAlert} from './util.js';
import {createGallery} from './gallery.js';
import {showFilters, setOnFilterClick} from './filter.js';
import {closePictureUploadForm, setOnPictureUploadFormSubmit} from './form.js';

getData()
  .then((pictures) => {
    createGallery(pictures);
    showFilters();
    setOnFilterClick(pictures);
  })
  .catch((err) => {
    showAlert(err.message);
  });

setOnPictureUploadFormSubmit(closePictureUploadForm);
