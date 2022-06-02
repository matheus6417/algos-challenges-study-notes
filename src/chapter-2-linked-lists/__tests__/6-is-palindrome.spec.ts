import LinkedList from '../../data-structures/linked-list';
import isPalindrome from '../6-is-palindrome';

describe('sumList', () => {
  const testCases = [
    {
      word: 'kayak',
      isPalindrome: true,
    },
    {
      word: 'esse',
      isPalindrome: true,
    },
    {
      word: 'reviver',
      isPalindrome: true,
    },
    {
      word: 'I am not a Palindrome',
      isPalindrome: false,
    },
    {
      word: 'racecar',
      isPalindrome: true,
    },
    {
      word: 'a man a canal',
      isPalindrome: false,
    },
    {
      word: 'a',
      isPalindrome: true,
    },
  ];
  testCases.forEach(({ word, isPalindrome: isPalindromeResult }) => {
    it(`should properly confirm that "${word}" ${
      isPalindromeResult ? 'is a Palindrome' : 'is not a Palindrome'
    }`, () => {
      const toList = (wordToSplit) => wordToSplit.split('');
      const list = LinkedList.create(toList(word));

      expect(isPalindrome(list)).toBe(isPalindromeResult);
    });
  });
});
