export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;

  const minimumCosts = new Array(n).fill(null);

  return Math.min(
    minCostRecursive(cost, n - 1, minimumCosts),
    minCostRecursive(cost, n - 2, minimumCosts)
  );
}

function minCostRecursive(
  cost: number[],
  i: number,
  minimumCosts: number[]
): number {
  if (i < 0) {
    return 0;
  }

  if (i <= 1) {
    return cost[i];
  }

  if (minimumCosts[i] !== null) {
    return minimumCosts[i];
  }

  minimumCosts[i] =
    cost[i] +
    Math.min(
      minCostRecursive(cost, i - 1, minimumCosts),
      minCostRecursive(cost, i - 2, minimumCosts)
    );

  return minimumCosts[i];
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
