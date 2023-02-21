/*Функция для проверки длины строки*/

const checkLength = (string, length) => string.length <= length;
checkLength('проверяемая строка', 20);

/*Функция для проверки, является ли строка палиндромом*/

const isPalindrome = (string) => {
  string = string.toLowerCase();
  let reverseString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string.at(i);
  }
  return string === reverseString;
};
isPalindrome('ДовОд');

/*Функция, для извлечения целых положительных цифр из строки*/

const getNumbers = (string) => {
  let numbers = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      numbers += string[i];
    }
  }
  return parseInt(numbers, 10);
};
getNumbers('1 кефир, 0.5 батона');

/*Функция с добавлением символов в строку*/

const addSymbols = (string, minLength, symbols) => {
  while (string.length < minLength) {
    string = symbols.slice(0, minLength - string.length) + string;
  }
  return string;
};
addSymbols('q', 4, 'we');
