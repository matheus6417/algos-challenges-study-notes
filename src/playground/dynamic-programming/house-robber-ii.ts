export function rob(nums: number[]): number {
  const array1 = nums.slice(1);
  const array2 = nums.slice(0, nums.length - 1);
  return Math.max(helper(array1), helper(array2));
}

function helper(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;

  // [rob1, rob2, n, n+1, ...]
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const newRob = Math.max(rob1 + n, rob2);

    rob1 = rob2;
    rob2 = newRob;
  }
  return rob2;
}

console.log(rob([1, 2, 3, 1]));
