// A stack can easily be implement using an array in Javascript
// because Array data type already has .push() and .pop() operations implemented.
class Stack<T> {
  items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  static create<T>(items = []) {
    return new Stack<T>(items);
  }

  length(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }

  push(value: T): void {
    this.items.push(value);
  }

  pop(): null | T {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek(): null | T {
    if (this.length() === 0) {
      return null;
    }
    return this.items[this.length() - 1];
  }
}

export default Stack;
