import LinkedList from '../../data-structures/linked-list';
import deleteMiddleNode from '../3-delete-middle-node';

describe('deleteMiddleNode', () => {
  const testCases = [
    {
      list: [8, 5, 1],
      index: 1,
    },
    {
      list: [8, 5, 1, 3],
      index: 2,
    },
    {
      list: [1, 2, 8, 3, 7, 0, 4],
      index: 4,
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      index: 10,
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      index: 12,
    },
  ];
  testCases.forEach(({ list, index }) => {
    it(`should delete the middle node from the list: [${list.toString()}] and index: ${index}`, () => {
      const linkedList = LinkedList.create(list);
      const node = linkedList._getNodeByIndex(index);
      const expectedList = [...list];
      expectedList.splice(index, 1);
      deleteMiddleNode(node);
      expect(linkedList.toArray()).toEqual(expectedList);
    });
  });
});
