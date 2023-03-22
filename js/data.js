/*Генерация данных*/

import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const CommentsCount = {MIN: 0, MAX: 10};
const LikesCount = {MIN: 15, MAX: 200};

const NAMES = [
  'Александр',
  'Ольга',
  'Андрей',
  'Анна',
  'Николай',
  'Эдуард',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Как вам фотка?',
  'И пусть весь мир подождет!',
  'Не судите строго, я начинающий фотограф',
  'Фото дня',
  'Зацени',
  'Красота в глазах смотрящего',
];

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATARS_COUNT) }.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from({length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)}, createComment),
});

const getPhotos = () => Array.from({length: PHOTOS_COUNT}, (_, photoIndex) => createPhoto(photoIndex + 1));

export {getPhotos};
