const binaryToString = (num: number): string => {
  if (num >= 1 || num <= 0) {
    throw new Error('number must be between 0 and 1');
  }
  let numToConvert = num;
  let valToSubtract = 0.5;
  let string = '0.';

  while (numToConvert > 0) {
    if (numToConvert - valToSubtract >= 0) {
      numToConvert = numToConvert - valToSubtract;
      string = string + '1';
      valToSubtract = valToSubtract / 2;
    } else {
      string = string + '0';
      valToSubtract = valToSubtract / 2;
    }

    if (string.length > 32) {
      throw new Error('The number cannot be represented accurately');
    }
  }

  return string;
};

export default binaryToString;
