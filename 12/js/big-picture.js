/*Отрисовка полноразмерного изображения*/

const bigPicturePreview = document.querySelector('.big-picture__preview');

const renderBigPicture = ({url, description, likes}) => {
  bigPicturePreview.querySelector('.big-picture__img img').src = url;
  bigPicturePreview.querySelector('.big-picture__img img').alt = description;
  bigPicturePreview.querySelector('.likes-count').textContent = likes;
  bigPicturePreview.querySelector('.social__caption').textContent = description;
};

export {renderBigPicture};
