const example = [
  [1, 3],
  [0],
  [3, 8],
  [0, 4, 5, 2],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

export function depthFirstSearch(graph: number[][]): number[] {
  const values: number[] = [];

  const seen = {};

  dfsRecursive(0, graph, values, seen);

  return values;
}

function dfsRecursive(
  vertex: number,
  graph: number[][],
  values: number[],
  seen: { [key: number]: boolean }
): void {
  if (seen[vertex] === true) {
    return;
  }
  seen[vertex] = true;
  values.push(vertex);

  const neighbors = graph[vertex];

  for (let i = 0; i < neighbors.length; i++) {
    dfsRecursive(neighbors[i], graph, values, seen);
  }
}

console.log(depthFirstSearch(example));
