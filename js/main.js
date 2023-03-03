/*Cоздание массива из 25 сгенерированных объектов*/

const PHOTOS_COUNT = 25;
const AVATARS_COUNT = 6;
const COMMENTS_COUNT = 1;
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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATARS_COUNT) }.svg`,
  messages: getRandomArrayElement(COMMENTS),
  names: getRandomArrayElement(NAMES),
});

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${ generatePhotoUrl() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: Array.from({length: COMMENTS_COUNT}, createComment),
});

const getPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

getPhotos();
