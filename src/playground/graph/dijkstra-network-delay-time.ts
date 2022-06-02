import { PriorityQueue } from '../../data-structures/priority-queue';

export function networkDelayTime(
  times: number[][],
  n: number,
  k: number
): number {
  const distances: number[] = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  const adjList: number[][][] = distances.map(() => []);

  distances[k - 1] = 0;

  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);

  heap.push(k - 1);

  for (let i = 0; i < times.length; i++) {
    // o(times)
    const [source, target, weight] = times[i];

    adjList[source - 1].push([target - 1, weight]);
  }

  while (!heap.isEmpty()) {
    //  O(n)
    const currentVertex = heap.pop();

    const adjacents = adjList[currentVertex];

    for (let i = 0; i < adjacents.length; i++) {
      const [neighboringVertex, weight] = adjacents[i];

      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex); //o(logn)
      }
    }
  }
  const ans = Math.max(...distances);

  return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}
