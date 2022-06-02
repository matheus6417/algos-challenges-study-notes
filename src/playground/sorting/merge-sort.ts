const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]) {
  if (array.length === 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const newArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      const min = left.shift();
      newArray.push(min);
    } else {
      const min = right.shift();
      newArray.push(min);
    }
  }
  return [...newArray, ...left, ...right];
}

const answer = mergeSort(numbers3);
console.log(answer);
