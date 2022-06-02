// - push all values found in the linked-list to a stack.
// - Traverse the link list again and in each .next, pop an element from the stack.
// - if at any point if linked-list value does not equal popped stack value, return false.
// - return true

const isPalindrome = (list) => {
  let currentNode = list.head;
  let runner = list.head;
  const stack = [];

  while (runner) {
    stack.push(currentNode.value);
    currentNode = currentNode.next;
    runner = runner.next;
  }

  // reset to start second pass
  currentNode = list.head;
  while (stack.length > 0) {
    const lastItem = stack.pop();
    if (lastItem !== currentNode.value) {
      return false;
    }
    currentNode = currentNode.next;
  }

  return true;
};

export default isPalindrome;
