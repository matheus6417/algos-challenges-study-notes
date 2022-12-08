import { isValidBST } from '../625_isValidBST';

describe('isValidBST', () => {
  it('should pass the first test case', () => {
    const root = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    expect(isValidBST(root)).toBe(true);
  });
  it('should pass the second test case', () => {
    const root = {
      val: 5,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 6,
          left: null,
          right: null,
        },
      },
    };
    expect(isValidBST(root)).toBe(false);
  });
});
