import Stack from '../stack-with-linked-list';

describe('stack with linked list', () => {
  it('should create a new stack on calling create()', () => {
    const stack = Stack.create();
    expect(stack).toHaveProperty('items');
    expect(stack).toHaveProperty('length');
  });
  it('should create a new stack with items on create(array)', () => {
    const stack = Stack.create([1, 2, 3, 4]);
    expect(stack.items.toArray()).toMatchObject([1, 2, 3, 4]);
    expect(stack.length()).toBe(4);
  });
  it('should return true when the stack is empty and false if it has elements on calling isEmpty() ', () => {
    const stack = Stack.create();
    expect(stack.isEmpty()).toBe(true);
    stack.push('a');
    expect(stack.isEmpty()).toBe(false);
  });
  it('should properly push into the stack on push()', () => {
    const stack = Stack.create();
    stack.push('a');
    stack.push('b');
    expect(stack.toArray()).toMatchObject(['a', 'b']);
  });
  it('should properly pop from stack on pop()', () => {
    const stack = Stack.create();
    stack.push('a');
    stack.push('b');
    const firstPop = stack.pop();
    expect(firstPop).toBe('b');
    expect(stack.toArray()).toMatchObject(['a']);

    const secondPop = stack.pop();
    expect(secondPop).toBe('a');
    expect(stack.toArray()).toMatchObject([]);
  });
  it('should return null if pop() is invoked on an empty stack', () => {
    const stack = Stack.create();
    const poppedElement = stack.pop();
    expect(poppedElement).toBe(null);
  });
  it('should return null if peek() is invoked on an empty stack', () => {
    const stack = Stack.create();
    const peekedElement = stack.peek();
    expect(peekedElement).toBe(null);
  });
  it('should return the top element if peek() is invoked on a non-empty stack', () => {
    const stack = Stack.create();
    stack.push('a');
    stack.push('b');

    const peekedElement = stack.peek();
    expect(peekedElement).toBe('b');
    expect(stack.toArray()).toMatchObject(['a', 'b']);
  });
});
