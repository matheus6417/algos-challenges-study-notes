class Node {
  val: number;

  neighbors: Node[];

  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function cloneGraph(node: Node | null): Node | null {
  const oldToNew = new Map();

  return cloneGraphRecursive(node, oldToNew);
}

function cloneGraphRecursive(node: Node | null, oldToNew) {
  if (oldToNew.has(node)) {
    return oldToNew.get(node);
  }

  const copy = new Node(node.val);

  oldToNew.set(node, copy);

  for (let i = 0; i < node.neighbors.length; i++) {
    const neighbor = node.neighbors[i];
    copy.neighbors.push(cloneGraphRecursive(neighbor, oldToNew));
  }

  return copy;
}
