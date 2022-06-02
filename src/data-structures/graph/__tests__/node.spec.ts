import Node from '../node';

describe('Graph node', () => {
  it('should create a new node on calling new Node()', () => {
    const node = new Node('Can', 5);
    expect(node).toHaveProperty('name');
    expect(node.name).toBe('Can');
    expect(node).toHaveProperty('value');
    expect(node.value).toBe(5);
  });
  it('should initialize value as null if no values passed', () => {
    const node = new Node('Can');
    expect(node.value).toBe(null);
    expect(node).toHaveProperty('value');
  });
  it('should add edge on addEdge()', () => {
    const node = new Node('Mona', 5);
    const neighbor = new Node('Milo', 5);
    node.addEdge(neighbor);
    expect(node.adjNodes.length).toBe(1);
    expect(node.adjNodes.includes(neighbor)).toBe(true);
  });
  it('should not add edge on addEdge() if edge already added', () => {
    const node = new Node('Mona', 5);
    const neighbor = new Node('Milo', 5);
    node.addEdge(neighbor);
    node.addEdge(neighbor);
    expect(node.adjNodes.length).toBe(1);
  });
  it('should return list of adjNodeNames on adjNodeNames', () => {
    const node = new Node('Mona', 5);
    const neighbor0 = new Node('Milo', 5);
    const neighbor1 = new Node('Bonbon', 3);
    node.addEdge(neighbor0);
    node.addEdge(neighbor1);
    expect(node.adjNodeNames).toMatchObject(['Milo', 'Bonbon']);
  });
});
