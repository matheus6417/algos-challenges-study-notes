import LinkedList from '../../data-structures/linked-list';
import sumList from '../5-sum-lists';

describe('sumList', () => {
  const testCases = [
    {
      num1: 1234,
      num2: 145325,
    },
    {
      num1: 98098234,
      num2: 324234,
    },
    {
      num1: 324234234,
      num2: 23213,
    },
    {
      num1: 2,
      num2: 7,
    },
    {
      num1: 617,
      num2: 295,
    },
  ];
  testCases.forEach(({ num1, num2 }) => {
    it(`should properly perform ${num1} + ${num2}`, () => {
      const numToList = (num) => num.toString().split('').reverse();
      const list1 = LinkedList.create(numToList(num1));
      const list2 = LinkedList.create(numToList(num2));

      expect(sumList(list1, list2)).toBe(num1 + num2);
    });
  });
});
