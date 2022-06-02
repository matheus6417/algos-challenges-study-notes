import LinkedList from '../../data-structures/linked-list';
import intersection from '../7-intersection';

const connectListsAtIndex = (list1, list2, index) => {
  const nodeAtIndex = list1._getNodeByIndex(index);
  list2.tail.next = nodeAtIndex;
  list2.tail = list1.tail;
  return list2;
};

describe('intersection', () => {
  const intersectingTestCases = [
    {
      mainList: ['Red Bull', 'Mercedes', 'Ferrari'],
      connectedList: ['Toro Rosso', 'McLaren', 'Racing Point'],
      index: 2,
    },
    {
      mainList: ['Galatasaray', 'Liverpool', 'Barcelona', 'CSKA Moscow'],
      connectedList: ['PSG', 'AS Roma', 'Sporting Lisbon', 'Hapoel Tel Aviv'],
      index: 1,
    },
    {
      mainList: [0],
      connectedList: [1],
      index: 0,
    },
    {
      mainList: [0, 1, 2, 3, 4, 5, 6],
      connectedList: [10, 9, 8, 7, 6, 5],
      index: 3,
    },
    {
      mainList: [0, 1, 2, 3, 4, 5, 6],
      connectedList: [10],
      index: 5,
    },
    {
      mainList: [0],
      connectedList: [10, 1, 2, 3, 4, 5, 6],
      index: 0,
    },
  ];
  intersectingTestCases.forEach(({ mainList, connectedList, index }) => {
    it(`should properly confirm that "[${mainList}]" and [${connectedList}] intersect at index: ${index}`, () => {
      const list1 = LinkedList.create(mainList);
      const list2 = LinkedList.create(connectedList);

      const cList2 = connectListsAtIndex(list1, list2, index);

      const intersectionNode = list1._getNodeByIndex(index);

      expect(intersection(list1, cList2)).toBe(intersectionNode);
      expect(intersection(list1, cList2).value).toBe(mainList[index]);
    });
  });
  const nonIntersectingTestCases = [
    {
      mainList: ['Red Bull', 'Mercedes', 'Ferrari'],
      secondList: ['Toro Rosso', 'McLaren', 'Racing Point'],
    },
    {
      mainList: ['Galatasaray', 'Liverpool', 'Barcelona', 'CSKA Moscow'],
      secondList: ['PSG', 'AS Roma', 'Sporting Lisbon', 'Hapoel Tel Aviv'],
    },
  ];
  nonIntersectingTestCases.forEach(({ mainList, secondList }) => {
    it(`should properly confirm that "[${mainList}]" and [${secondList}] do not intersect`, () => {
      const list1 = LinkedList.create(mainList);
      const list2 = LinkedList.create(secondList);

      expect(intersection(list1, list2)).toBe(null);
    });
  });
});
