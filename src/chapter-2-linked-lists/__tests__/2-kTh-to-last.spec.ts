import LinkedList from '../../data-structures/linked-list';
import kThToLast from '../2-kth-to-last';

describe('kThToLast', () => {
  const testCases = [
    {
      list: [5],
      k: 0,
    },
    {
      list: [8, 5, 1],
      k: 0,
    },
    {
      list: [8, 5, 1],
      k: 1,
    },
    {
      list: [1, 2, 8, 3, 7, 0, 4],
      k: 3,
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      k: 8,
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      k: 16,
    },
  ];
  testCases.forEach(({ list, k }) => {
    it(`should get the kth item for list: [${list.toString()}] and k: ${k}`, () => {
      const linkedList = LinkedList.create(list);
      const expectedOutput = list[list.length - 1 - k];
      expect(kThToLast(linkedList.head, k)).toBe(expectedOutput);
    });
  });
  it('should throw an error if k is greater than list length', () => {
    const list = LinkedList.create([1, 2, 3, 4]);
    const k = 10;
    expect(() => kThToLast(list.head, k)).toThrow(
      "Length of list can't be less than k",
    );
  });
});
