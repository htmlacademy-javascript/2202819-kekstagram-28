/*Отрисовка миниатюр*/

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderMiniature = (({url, description, likes, comments, id}) => {
  const miniature = pictureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.dataset.id = id;

  return miniature;
});

const renderMiniatures = (miniatures) => {
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());

  const miniaturesListFragment = document.createDocumentFragment();
  miniatures.forEach((miniature) => {
    miniaturesListFragment.append(renderMiniature(miniature));
  });
  picturesContainer.append(miniaturesListFragment);
};

export {renderMiniatures};
