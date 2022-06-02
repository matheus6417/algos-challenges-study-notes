import LinkedList from '../../data-structures/linked-list';
import detectLoop from '../8-detect-loop';

describe('intersection', () => {
  const loopTestCases = [
    {
      list: [0, 1, 2, 3, 4, 5, 6],
      index: 3,
    },
    {
      list: [0, 1],
      index: 0,
    },
    {
      list: [0],
      index: 0,
    },
    {
      list: ['a', 'b', 'c', 'd'],
      index: 2,
    },
  ];
  loopTestCases.forEach(({ list, index }) => {
    it(`should properly confirm that "[${list}]" forms a loop at index: ${index}`, () => {
      const linkedList = LinkedList.create(list);

      const loopNode = linkedList._getNodeByIndex(index);
      const lastIndex = linkedList.tail;

      lastIndex.next = loopNode;

      // expect(detectLoop(linkedList)).toBe(loopNode);
      expect(detectLoop(linkedList).value).toBe(list[index]);
    });
  });
  const nonLoopTestCases = [
    {
      list: ['Red Bull', 'Mercedes', 'Ferrari'],
    },
  ];
  nonLoopTestCases.forEach(({ list }) => {
    it(`should properly confirm that "[${list}]" does not contain a loop`, () => {
      const linkedList = LinkedList.create(list);

      expect(detectLoop(linkedList)).toBe(null);
    });
  });
});
