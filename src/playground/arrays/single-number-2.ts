function singleNumber(nums: number[]): number {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in hash) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  Object.keys(hash).forEach((num) => {
    if (hash[num] === 1) {
      return parseInt(num, 10);
    }
  });

  return -1;
}

console.log(singleNumber([2, 2, 3, 2]));
