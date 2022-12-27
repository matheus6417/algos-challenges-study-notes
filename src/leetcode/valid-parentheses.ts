// https:// leetcode.com/problems/valid-parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

export const isValid = (s) => {
  //   Define a stack array to store the open brackets.
  const stack = [];
  //   Iterate through each character in the string.
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const c of s) {
    if (c in pairs) {
      // If the character is a close bracket, check if the top element of the stack is the corresponding open bracket.
      // If it is, pop the top element from the stack. If it is not, return false.
      if (stack.pop() !== pairs[c]) {
        return false;
      }
    } else {
      //   If the character is an open bracket, push it to the stack.
      stack.push(c);
    }
  }

  //   After the iteration, if the stack is empty, return true. Otherwise, return false.
  return stack.length === 0;
};

const s = '()[]{}';

if (isValid(s)) {
  console.log('Valid');
} else {
  console.log('Invalid');
}
