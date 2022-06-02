const intersection = (line1, line2) => {
  if (line1.tail !== line2.tail) {
    return null;
  }
  const lengthOfLine1 = line1.length();
  const lengthOfLine2 = line2.length();

  const lengthDiff = Math.abs(lengthOfLine1 - lengthOfLine2);
  const shorterList = lengthOfLine1 < lengthOfLine2 ? line1 : line2;
  const longerList = lengthOfLine1 >= lengthOfLine2 ? line1 : line2;

  let currNodeOnLonger = longerList.head;
  let hopCount = 0;

  // offset the longer list by the amount equal to difference in length
  while (hopCount !== lengthDiff) {
    currNodeOnLonger = currNodeOnLonger.next;
    hopCount += 1;
  }
  let currNodeOnShorter = shorterList.head;
  // look for equality by reference for nodes
  while (currNodeOnLonger !== currNodeOnShorter) {
    currNodeOnLonger = currNodeOnLonger.next;
    currNodeOnShorter = currNodeOnShorter.next;
  }

  return currNodeOnShorter;
};

export default intersection;
