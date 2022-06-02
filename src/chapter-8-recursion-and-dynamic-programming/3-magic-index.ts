export const magicIndexBruteForce = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      return i;
    }
  }
  return -1;
};

const magicIndexRecursive = (
  nums: number[],
  start: number,
  end: number
): number => {
  if (end < start) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  const midElement = nums[mid];
  if (mid === midElement) {
    return mid;
  }
  if (midElement > mid) {
    return magicIndexRecursive(nums, start, mid - 1);
  }
  if (mid > midElement) {
    return magicIndexRecursive(nums, mid + 1, end);
  }

  return -1;
};
const magicIndex = (nums: number[]): number => {
  return magicIndexRecursive(nums, 0, nums.length - 1);
};

export default magicIndex;

magicIndex([-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13]);
