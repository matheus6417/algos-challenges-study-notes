const example = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

export function breathFirstSearch(graph: number[][]): number[] {
  const values: number[] = [];

  const queue: number[] = [0];

  const seen = {};

  while (queue.length > 0) {
    const vertex = queue.shift();
    seen[vertex] = true;
    values.push(vertex);

    const neighbors = graph[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!seen[neighbor]) {
        queue.push(neighbor);
      }
    }
  }

  return values;
}

console.log(breathFirstSearch(example));
