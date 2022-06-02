class Node<T> {
  name: string;

  private _adjNodes: Node<T>[]

  value: T;

  constructor(name: string, value: T = null) {
    this.name = name;
    this._adjNodes = [];
    this.value = value;
  }

  addEdge(nodeToAdd: Node<T>): void{
    if (!this.adjNodes.includes(nodeToAdd)) {
      this.adjNodes.push(nodeToAdd);
    }
  }

  get adjNodes(): Node<T>[] {
    return this._adjNodes;
  }

  get adjNodeNames(): string[] {
    return this.adjNodes.map((node) => node.name);
  }
}

export default Node;
