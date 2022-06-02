import Node from './node';

class Graph<T> {
  private _nodes: Node<T>[]

  constructor() {
    this._nodes = [];
  }

  get nodes() {
    return this._nodes;
  }

  addNode(name: string, value?: T): Node<T> {
    const hasNode = this.nodes.filter((node) => node.name === name).length > 0;
    if (!hasNode) {
      const newNode = new Node(name, value);
      this.nodes.push(newNode);
      return newNode;
    }
    return this.getNode(name);
  }

  hasNode(name: string) : boolean {
    return this.nodes.filter((node) => node.name === name).length > 0;
  }

  getNode(name: string) : Node<T> | undefined {
    return this.nodes.find((node) => node.name === name);
  }

  addEdge(v: string, w: string) {
    if (this.hasNode(v) && this.hasNode(w)) {
      const nodeV = this.getNode(v);
      const nodeW = this.getNode(w);
      nodeV.addEdge(nodeW);
      nodeW.addEdge(nodeV);
    }
  }

  printGraph() {
    // iterate over the vertices
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      let adjNodes = '';

      for (let j = 0; j < node.adjNodes.length; j++) {
        const adjNode = node.adjNodes[j];
        adjNodes += `${adjNode.name} `;
      }
      // eslint-disable-next-line no-console
      console.log(`${node.name} -> ${adjNodes}`.trim());
    }
  }
}

export default Graph;
