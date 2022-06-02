export function subsets(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }

  const result = [];

  subsetsRecursive(nums, 0, [], result);

  return result;
}

function subsetsRecursive(
  nums: number[],
  index: number,
  currentSubsetArray: number[],
  res: number[][]
) {
  res.push([...currentSubsetArray]);

  for (let i = index; i < nums.length; i++) {
    currentSubsetArray.push(nums[i]);
    subsetsRecursive(nums, i + 1, currentSubsetArray, res);
    currentSubsetArray.pop();
  }
}
