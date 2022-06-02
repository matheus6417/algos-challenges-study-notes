// [1,3,3,5,5,5,5,8,9], target = 6  -> [3,5]

// [1,2,3,4,5,6], target = 4 -> [3,3]
// [1,2,3,4,5] target = 9 -> [-1, -1]
// [] t=3 -> [-1 , -1]

function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }

  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) {
    return [-1, -1];
  }

  let startPos = firstPos;
  let endPos = firstPos;

  let temp1;
  let temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }

  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }

  endPos = temp2;

  return [startPos, endPos];
}

function binarySearch(
  array: any[],
  left: number,
  right: number,
  target: number
) {
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    const midValue = array[mid];

    if (midValue === target) {
      return mid;
    }

    if (midValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(searchRange([1, 3, 3, 5, 5, 5, 5, 9], 5));
