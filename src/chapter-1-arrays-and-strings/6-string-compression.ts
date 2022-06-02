const stringCompression = (string: string) :string => {
  // if there are no repeated strings, return the original
  if (string.length === Array.from(new Set(string.split(''))).length) {
    return string;
  }
  const output = [];

  for (let i = 0; i < string.length; i++) {
    const prevChar = string[i - 1];
    const currentChar = string[i];

    if (prevChar !== currentChar) {
      output.push(string[i]);
      output.push(1);
    } else {
      const newCount = output.pop() + 1;
      output.push(newCount);
    }
  }
  return output.join('');
};

export default stringCompression;
