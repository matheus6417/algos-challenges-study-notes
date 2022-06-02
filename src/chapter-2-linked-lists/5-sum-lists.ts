const convertListToInt = (list) => {
  let num = 0;
  let digit = 1;
  let current = list.head;
  while (current) {
    num += digit * current.value;
    digit *= 10;
    current = current.next;
  }
  return num;
};

const sumList = (list1, list2) => {
  const num1 = convertListToInt(list1);
  const num2 = convertListToInt(list2);
  return num1 + num2;
};

export default sumList;
