import { isPermutation, isPermutationNaive } from '../2-is-permutation';

const test = (fn) => {
  describe(fn.name, () => {
    it('Should return true if two strings are permutations of each other with', () => {
      expect(fn('aba', 'aab')).toBe(true);
      expect(fn('abba', 'baba')).toBe(true);
    });
    it('Should return false if two strings are not permutations of each other', () => {
      expect(fn('aba', 'aaba')).toBe(false);
      expect(fn('aba', 'aa')).toBe(false);
      expect(fn('abcd', 'abc')).toBe(false);
      expect(fn('abc', 'abcd')).toBe(false);
      expect(fn('abcd', 'abce')).toBe(false);
      expect(fn('abce', 'abcd')).toBe(false);
    });
  });
};

test(isPermutation);
test(isPermutationNaive);
