export function rob(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;

  // [rob1, rob2, n, n+1]
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    const temp = Math.max(n + rob1, rob2);

    rob1 = rob2;
    rob2 = temp;
  }

  return rob2;
}
