export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;
  return Math.min(minCostRecursive(cost, n - 1), minCostRecursive(cost, n - 2));
}

function minCostRecursive(cost: number[], i: number): number {
  if (i < 0) {
    return 0;
  }

  if (i <= 1) {
    return cost[i];
  }

  return (
    cost[i] +
    Math.min(minCostRecursive(cost, i - 1), minCostRecursive(cost, i - 2))
  );
}
