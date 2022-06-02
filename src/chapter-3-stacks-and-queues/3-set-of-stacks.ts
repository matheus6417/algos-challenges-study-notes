import Stack from '../data-structures/stack';

class SetOfStacks<T> {
  stackOfStacks: Stack<Stack<T>>;

  maxIndividualLength: number;

  constructor(maxIndividualLength: number) {
    this.stackOfStacks = Stack.create();
    this.maxIndividualLength = maxIndividualLength;
  }

  static create(maxIndividualLength = 10) {
    if (maxIndividualLength < 1) {
      throw new Error('length of each stack has to a positive number');
    }
    return new SetOfStacks(maxIndividualLength);
  }

  push(value: T) {
    const currentStack = this.stackOfStacks.peek();
    if (this.isEmpty() || currentStack.length() === this.maxIndividualLength) {
      const newStack = new Stack<T>();
      newStack.push(value);
      this.stackOfStacks.push(newStack);
    } else {
      currentStack.push(value);
    }
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    const currentStack = this.stackOfStacks.peek();
    if (currentStack.length() === 1) {
      this.stackOfStacks.pop();
    }
    return currentStack.pop();
  }

  length(): number {
    if (this.stackOfStacks.length() === 0) {
      return 0;
    }
    return (
      (this.stackOfStacks.length() - 1) * this.maxIndividualLength +
      this.stackOfStacks.peek().length()
    );
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }
}

export default SetOfStacks;
