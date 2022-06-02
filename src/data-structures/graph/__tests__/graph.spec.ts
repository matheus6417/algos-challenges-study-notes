import Graph from '..';

const initializeGraph = (nodes) => {
  const graph = new Graph();
  for (let i = 0; i < nodes.length; i++) {
    graph.addNode(nodes[i]);
  }
  return graph;
};

describe('Graph node', () => {
  it('should create a new stack on calling new Node()', () => {
    const graph = new Graph();
    expect(graph).toHaveProperty('nodes');
    expect(graph).toHaveProperty('addNode');
  });
  it('should add node to the list on addNode()', () => {
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
    const graph = initializeGraph(nodes);
    expect(graph.nodes).toHaveLength(nodes.length);
    expect(graph.hasNode('A')).toBe(true);
  });
  it('should return the original node if node already exists', () => {
    const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];
    const graph = initializeGraph(nodes);
    const nodeToAdd = graph.addNode('A');
    const existingNode = graph.getNode('A');
    expect(nodeToAdd).toBe(existingNode);
  });
  it('should properly return true on hasNode() if node exists, otherwise false', () => {
    const nodes = ['A', 'B', 'C'];
    const graph = initializeGraph(nodes);
    expect(graph.hasNode('A')).toBe(true);
    expect(graph.hasNode('Z')).toBe(false);
  });
  it('should properly return the node on getNode() if node exists, otherwise undefined', () => {
    const nodes = ['A', 'B', 'C'];
    const graph = initializeGraph(nodes);
    expect(graph.getNode('A')).toMatchObject({ name: 'A', value: null, adjNodes: [] });
    expect(graph.getNode('Z')).toBe(undefined);
  });
  it('should add edge on addEdge()', () => {
    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const graph = initializeGraph(nodes);
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    expect(graph.getNode('A').adjNodes.length).toBe(3);
    expect(graph.getNode('A').adjNodeNames).toMatchObject(['B', 'D', 'E']);
    expect(graph.getNode('B').adjNodes.length).toBe(2);
    expect(graph.getNode('B').adjNodeNames).toMatchObject(['A', 'C']);
  });
  it('should not add edge on addEdge() if edge already added', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const graph = initializeGraph(nodes);

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'E');
    graph.addEdge('B', 'C');
    graph.addEdge('D', 'E');
    graph.addEdge('E', 'C');

    graph.printGraph();

    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenNthCalledWith(1, 'A -> B D E');
    expect(console.log).toHaveBeenNthCalledWith(2, 'B -> A C');
    /* eslint-enable no-console */
  });
});
