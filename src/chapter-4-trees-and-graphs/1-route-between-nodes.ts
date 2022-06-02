import BaseGraph from '../data-structures/graph';
import Queue from '../data-structures/queue';
import Node from '../data-structures/graph/node';

class Graph<T> extends BaseGraph<T> {
  isRouteBetweenBFS(start: Node<T>, end: Node<T>): boolean {
    const hasStart = this.hasNode(start.name);
    const hasEnd = this.hasNode(end.name);

    if (!hasStart || !hasEnd) {
      return false;
    }
    if (start.name === end.name) {
      return true;
    }
    const visited = new Set<Node<T>>();

    const queue = new Queue<Node<T>>();
    queue.enqueue(start);
    visited.add(start);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      const { adjNodes } = node;
      for (let i = 0; i < adjNodes.length; i++) {
        const v = adjNodes[i];
        if (!visited.has(v)) {
          if (v === end) {
            return true;
          }
          visited.add(v);
          queue.enqueue(v);
        }
      }
      visited.add(node);
    }
    return false;
  }

  isRouteBetweenDFS(start: Node<T>, end: Node<T>): boolean {
    const visited = new Set<Node<T>>();
    return this._isRouteBetweenDFSRecursive(start, end, visited);
  }

  private _isRouteBetweenDFSRecursive(
    start: Node<T>,
    end: Node<T>,
    visited: Set<Node<T>>
  ) {
    if (start === end) {
      return true;
    }
    const adjToSearch = start.adjNodes.filter((n) => !visited.has(n));

    let isBetween = false;
    for (let i = 0; i < adjToSearch.length; i++) {
      const vertex = adjToSearch[i];
      visited.add(vertex);
      isBetween = this._isRouteBetweenDFSRecursive(vertex, end, visited);
      if (isBetween) {
        return true;
      }
    }
    return false;
  }
}

export default Graph;
