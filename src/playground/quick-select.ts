const numbers3 = [2, 1];

function findKthLargest(nums: number[], k: number): number {
  const indexToFind = nums.length - k;

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
}

export function quickSelect(
  array: number[],
  left: number,
  right: number,
  indexToFind: number
) {
  const partitionIndex = partition(array, left, right);
  if (partitionIndex === indexToFind) {
    return array[partitionIndex];
  }
  if (indexToFind < partitionIndex) {
    return quickSelect(array, left, partitionIndex - 1, indexToFind);
  }
  return quickSelect(array, left + 1, right, indexToFind);
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

console.log(findKthLargest(numbers3, 1));
