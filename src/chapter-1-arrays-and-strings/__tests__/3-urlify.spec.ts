import { urlify, urlifyNaive } from '../3-urlify';

const test = (fn) => {
  describe(fn.name, () => {
    it('Should return urlified string using', () => {
      expect(fn("hello is it me you're looks for")).toBe("hello%20is%20it%20me%20you're%20looks%20for");
      expect(fn('can')).toBe('can');
    });
  });
};

test(urlify);
test(urlifyNaive);
