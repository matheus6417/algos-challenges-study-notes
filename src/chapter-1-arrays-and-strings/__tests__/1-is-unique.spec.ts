import {
  isUnique,
  isUniqueWithReduce,
  isUniqueNaive,
} from '../1-is-unique';

const test = (fn) => {
  describe(fn.name, () => {
    it('Should return true if all characters in a string are unique', () => {
      expect(fn('abcd')).toBe(true);
      expect(fn('mdjq')).toBe(true);
      expect(fn('abcdefghijklmnopqrstuvwxyz')).toBe(true);
    });
    it('Should return false if there are repeating characters', () => {
      expect(fn('abccd')).toBe(false);
      expect(fn('bhjjb')).toBe(false);
    });
  });
};

test(isUnique);
test(isUniqueWithReduce);
test(isUniqueNaive);
