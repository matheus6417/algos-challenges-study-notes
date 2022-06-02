import LinkedList from '../../data-structures/linked-list';
import partition from '../4-partition';

// all nodes less than x come before all nodes greater than or equal to x
describe('partition', () => {
  const testCases = [
    {
      list: [8, 5, 1, 3],
      value: 2,
    },
    {
      list: [1, 2, 8, 3, 7, 0, 4],
      value: 4,
    },
    {
      list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
      value: 10,
    },
    {
      list: [3, 5, 8, 5, 10, 2, 1],
      value: 5,
    },
  ];
  testCases.forEach(({ list, value }) => {
    it(`should properly partition the list [${list.toString()}] with value: ${value}`, () => {
      const linkedList = LinkedList.create(list);

      const result = partition(linkedList.head, value);

      const isResultPartitionValid = (numbers, valueOfPartition) => {
        const partitionItem = numbers.find((num) => num >= valueOfPartition);
        const indexOfValue = numbers.indexOf(partitionItem);
        const beforeArray = numbers.slice(0, indexOfValue);
        return beforeArray.reduce(
          (acc, curr) => acc && curr < valueOfPartition,
          true
        );
      };

      expect(isResultPartitionValid(result.toArray(), value)).toBe(true);
    });
  });
});
