export function networkDelayTime(
  times: number[][],
  n: number,
  k: number
): number {
  const distances: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER);

  distances[k - 1] = 0;

  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = 0; j < times.length; j++) {
      const [source, target, weight] = times[i];
      if (distances[source - 1] + weight < distances[target - 1]) {
        distances[target - 1] = distances[source - 1] + weight;
        count++;
      }
    }
    if (count === 0) {
      break;
    }
  }

  const ans = Math.max(...distances);

  if (ans === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return ans;
}
