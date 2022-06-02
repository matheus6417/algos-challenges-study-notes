const isUniqueWithReduce = (string: string) : boolean => {
  const charCounts = string.split('').reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const values = Object.values(charCounts);
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 1) {
      return false;
    }
  }
  return true;
};

const isUniqueNaive = (string: string) : boolean => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

const isUnique = (string: string) : boolean => {
  const charCounts = {};
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] in charCounts)) {
      charCounts[string[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
};

export {
  isUnique,
  isUniqueWithReduce,
  isUniqueNaive,
};
