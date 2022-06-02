import isPalindrome from '../4-is-palindrome';

describe('isPalindrome', () => {
  it('Should return true if string is palindrome', () => {
    expect(isPalindrome('Never odd or even')).toBe(true);
  });
  it('Should return false if string is not palindrome', () => {
    expect(isPalindrome('can')).toBe(false);
  });
});
