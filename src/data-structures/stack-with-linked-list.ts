import LinkedList from './linked-list';

class Stack<T> {
  items: LinkedList<T>;

  constructor(items: T[]) {
    this.items = LinkedList.create(items);
  }

  static create<T>(items = []): Stack<T> {
    return new Stack<T>(items);
  }

  length(): number {
    return this.items.length();
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }

  push(value: T) {
    this.items.unshift(value);
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek(): null | T {
    if (this.length() === 0) {
      return null;
    }
    return this.items.head.value;
  }

  toArray(): T[] {
    // toArray() requires a reverse() because unlike an array,
    // linked-list implementation of a stack has linked-lists head as its head
    return this.items.toArray().reverse();
  }
}

export default Stack;
