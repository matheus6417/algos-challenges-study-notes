import Stack from '../data-structures/stack';

class SortableStack<T> extends Stack<T> {
  static create<T>(items: T[] = []) {
    return new SortableStack<T>(items);
  }

  sort() {
    if (this.isEmpty()) {
      return this;
    }
    const sortedStack = Stack.create<T>();

    while (!this.isEmpty()) {
      const temp = this.pop();
      while (!sortedStack.isEmpty() && sortedStack.peek() > temp) {
        const poppedFromSorted = sortedStack.pop();
        this.push(poppedFromSorted);
      }
      sortedStack.push(temp);
    }
    while (!sortedStack.isEmpty()) {
      this.push(sortedStack.pop());
    }
    return this;
  }
}

export default SortableStack;
