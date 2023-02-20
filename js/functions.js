function getLength(string, length) {
  return string.legth <= length;
}
getLength();

function isPalindrome(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1 - i]) {
      return true;
    }
  }
  return false;
}
isPalindrome();

function getNumber(string) {
  let newNumber = '';
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      newNumber += string[i];
    }
  }
  return parseInt(newNumber, 10);
}
getNumber();

function changeString(string, minLength, addSymbol) {
  if (string.length >= minLength) {
    return string;
  }
  while (string.length < minLength - addSymbol.length) {
    string = addSymbol + string;
  }
  if(string.length < minLength){
    string = addSymbol.slice(0, minLength - string.length) + string;
  }
  return string;
}
changeString();
