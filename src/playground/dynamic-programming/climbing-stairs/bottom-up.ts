export function minCostClimbingStairs(cost: number[]): number {
  const n = cost.length;

  if (n === 0) return 0;
  if (n === 1) return cost[0];

  let dpOne = cost[0];
  let dpTwo = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const current = cost[i] + Math.min(dpOne, dpTwo);
    dpOne = dpTwo;

    dpTwo = current;
  }

  return Math.min(dpTwo, dpOne);
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
