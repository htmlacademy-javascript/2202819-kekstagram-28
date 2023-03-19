/*Отрисовка полноразмерного изображения*/

const bigPhotoPreview = document.querySelector('.big-picture__preview');
const commentsContainer = bigPhotoPreview.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector('.social__comment');

const renderComment = (({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const createCommentsList = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsListFragment.append(renderComment(comment));
  });
  commentsContainer.append(commentsListFragment);
};

const renderBigPhoto = ({url, description, likes, comments}) => {
  bigPhotoPreview.querySelector('.big-picture__img img').src = url;
  bigPhotoPreview.querySelector('.big-picture__img img').alt = description;
  bigPhotoPreview.querySelector('.likes-count').textContent = likes;
  bigPhotoPreview.querySelector('.comments-count').textContent = comments.length;
  bigPhotoPreview.querySelector('.social__caption').textContent = description;

  commentsContainer.innerHTML = '';
  createCommentsList(comments);
};

export {renderBigPhoto};
