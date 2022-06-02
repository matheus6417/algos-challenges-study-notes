function combinationSum(candidates: number[], target: number): number[][] {
  const result = [];

  combinationSumRecursive(candidates, target, result, [], 0);

  return result;
}

function combinationSumRecursive(
  candidates: number[],
  target: number,
  result: number[][],
  currrentCombination: number[],
  index
) {
  if (target === 0) {
    result.push([...currrentCombination]);
  }

  for (let i = index; i < candidates.length; i++) {
    if (candidates[i] <= target) {
      currrentCombination.push(candidates[i]);
      combinationSumRecursive(
        candidates,
        target - candidates[i],
        result,
        currrentCombination,
        i
      );
      currrentCombination.pop();
    }
  }
}
