// this solution was heavily influenced by
// https://www.geeksforgeeks.org/check-if-two-given-strings-are-at-edit-distance-one/
const oneAway = (s1: string, s2: string): boolean => {
  if (Math.abs(s1.length - s2.length) > 1) {
    return false;
  }

  let countOfEdits = 0;
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    // If current characters don't match
    if (s1[i] !== s2[j]) {
      if (countOfEdits === 1) {
        return false;
      }
      // If length of one of the strings is more, only possible edit is to remove a character
      if (s1.length > s2.length) {
        i += 1;
      } else if (s1.length < s2.length) {
        j += 1;
      } else {
        i += 1;
        j += 1;
      }

      // Increment count of edits
      countOfEdits += 1;
    } else {
      // If current characters match move on to the next set of characters
      i += 1;
      j += 1;
    }
  }
  return countOfEdits <= 1;
};

export default oneAway;
