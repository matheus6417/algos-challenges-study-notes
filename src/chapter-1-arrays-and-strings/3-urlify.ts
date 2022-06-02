const urlifyNaive = (string: string) : string => {
  const charArray = string.trim().split('');

  const newArray = [];

  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === ' ') {
      newArray.push('%20');
    } else {
      newArray.push(charArray[i]);
    }
  }
  return newArray.join('');
};

const urlify = (string: string) : string => string.trim().split(' ').join('%20');

export { urlify, urlifyNaive };
