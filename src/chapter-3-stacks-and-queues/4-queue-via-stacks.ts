import Stack from '../data-structures/stack';

class MyQueue<T> {
  frontStack: Stack<T>;

  backStack: Stack<T>;

  constructor() {
    this.frontStack = Stack.create();
    this.backStack = Stack.create();
  }

  static create() {
    return new MyQueue();
  }

  length(): number {
    return this.frontStack.length() + this.backStack.length();
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }

  enqueue(value: T): void {
    this.frontStack.push(value);
  }

  dequeue(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    if (this.backStack.isEmpty()) {
      this.shiftFromFrontToBack();
    }
    return this.backStack.pop();
  }

  shiftFromFrontToBack(): void {
    while (!this.frontStack.isEmpty()) {
      const temp = this.frontStack.pop();
      this.backStack.push(temp);
    }
  }

  peek(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    if (this.backStack.isEmpty()) {
      this.shiftFromFrontToBack();
    }
    return this.backStack.peek();
  }
}

export default MyQueue;
