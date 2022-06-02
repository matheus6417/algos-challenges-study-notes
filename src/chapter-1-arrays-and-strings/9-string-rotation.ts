const isSubstring = (s1, s2) => s1.includes(s2);

const stringRotation = (s1: string, s2: string) : boolean => {
  const mergedStrings = s1 + s2;
  return isSubstring(mergedStrings, s2);
};

export default stringRotation;
