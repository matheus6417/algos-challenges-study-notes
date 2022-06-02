const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      const smallerItem = array.splice(i, 1)[0];
      array.unshift(smallerItem);
    } else {
      for (let j = 1; j < array.length; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          const itemToMove = array.splice(i, 1)[0];
          array.splice(j, 0, itemToMove);
        }
      }
    }
  }
  return array;
}

insertionSort(numbers2);
console.log(numbers2);
