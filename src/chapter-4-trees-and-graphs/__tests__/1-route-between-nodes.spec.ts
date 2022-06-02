import Graph from '../1-route-between-nodes';
import Node from '../../data-structures/graph/node';

describe('Route Between Nodes', () => {
  const runTests = () => {
    const methodsToTest = ['DFS', 'BFS'];
    methodsToTest.forEach((method) => {
      const isRouteBetween__ = `isRouteBetween${method}`;
      it(`should return true using ${method} if there is indeed a route between two nodes`, () => {
        const graph = new Graph();

        const nodeA = graph.addNode('A');
        const nodeB = graph.addNode('B');
        const nodeC = graph.addNode('C');
        const nodeD = graph.addNode('D');
        const nodeE = graph.addNode('E');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'C');
        graph.addEdge('D', 'E');
        graph.addEdge('E', 'F');

        expect(graph[isRouteBetween__](nodeA, nodeB)).toBe(true);
        expect(graph[isRouteBetween__](nodeB, nodeA)).toBe(true);
        expect(graph[isRouteBetween__](nodeD, nodeE)).toBe(true);
        expect(graph[isRouteBetween__](nodeB, nodeC)).toBe(true);
      });
      it(`should return false using ${method} if there is no route between two nodes`, () => {
        const graph = new Graph();

        const nodeA = graph.addNode('A');
        const nodeE = graph.addNode('E');
        const nodeF = graph.addNode('F');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');

        graph.addEdge('A', 'B');
        graph.addEdge('A', 'C');
        graph.addEdge('B', 'C');
        graph.addEdge('D', 'E');
        graph.addEdge('E', 'F');

        expect(graph[isRouteBetween__](nodeA, nodeF)).toBe(false);
        expect(graph[isRouteBetween__](nodeA, nodeE)).toBe(false);
      });
      it(`should return false using ${method} if a node doesn't exist in the graph`, () => {
        const graph = new Graph();

        const badNode = new Node('Z');

        const nodeA = graph.addNode('A');
        const nodeF = graph.addNode('F');

        expect(graph[isRouteBetween__](badNode, nodeF)).toBe(false);
        expect(graph[isRouteBetween__](nodeA, badNode)).toBe(false);
      });
      it(`should return true using ${method} if start and end nodes are the same`, () => {
        const graph = new Graph();
        const nodeA = graph.addNode('A');

        expect(graph[isRouteBetween__](nodeA, nodeA)).toBe(true);
      });
    });
  };
  runTests();
});
