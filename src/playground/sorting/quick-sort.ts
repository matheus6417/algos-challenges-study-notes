const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function quickSort(array: number[], left: number, right: number) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, left + 1, right);
  }

  return array;
}

function partition(array: number[], left: number, right: number): number {
  const pivotElement = array[right];

  let partitionIndex = left;

  for (let j = 0; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, right);

  return partitionIndex;
}

function swap(array: number[], index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

console.log(quickSort(numbers3, 0, numbers3.length - 1));
