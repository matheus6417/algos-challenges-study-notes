import LinkedList from '../../data-structures/linked-list';
import { removeDupsNoHash, removeDupsWithHash } from '../1-remove-dups';

const test = (fn) => {
  describe(fn.name, () => {
    const testCases = [
      {
        list: [1, 1],
        result: [1],
      },
      {
        list: [2, 2, 2],
        result: [2],
      },
      {
        list: [1, 1, 2, 2, 3, 3, 4, 4],
        result: [1, 2, 3, 4],
      },
      {
        list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
        result: [8, 9, 6, 4, 2, 3, 1],
      },
    ];
    testCases.forEach(({ list, result }) => {
      it(`Should remove duplicates for [${list.toString()}]`, () => {
        const linkedList = LinkedList.create(list);
        fn(linkedList.head);
        expect(linkedList.toArray()).toEqual(result);
      });
    });
    it('Should return the same array if there are no duplicates', () => {
      const list1 = LinkedList.create([1, 2, 3, 4]);
      fn(list1.head);
      expect(list1.toArray()).toEqual([1, 2, 3, 4]);
    });
  });
};

test(removeDupsNoHash);
test(removeDupsWithHash);
