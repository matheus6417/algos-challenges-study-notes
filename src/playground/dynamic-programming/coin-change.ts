export function coinChange(coins: number[], amount: number): number {
  const count = 0;

  const dp = new Array(amount + 1).fill(0);
  coinChangeRecursive(coins, amount, count, dp);

  return dp[amount];
}

function coinChangeRecursive(
  coins: number[],
  amount: number,
  count,
  dp
): number {
  if (dp[amount] !== 0) {
    return dp[amount];
  }
  if (amount < 0) {
    return -1;
  }
  if (amount === 0) {
    return count;
  }

  const counts = [];

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];

    const newCount = coinChangeRecursive(coins, amount - coin, count + 1, dp);

    if (newCount !== -1) {
      counts.push(newCount);
    }
  }

  if (counts.length === 0) {
    return -1;
  }

  dp[amount] = Math.min(...counts);

  return dp;
}

console.log(coinChange([1, 2, 5], 11));
