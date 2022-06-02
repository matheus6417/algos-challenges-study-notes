import LinkedList from './linked-list';

class Queue<T> {
  items: LinkedList<T>;

  constructor() {
    this.items = new LinkedList<T>();
  }

  static create<T>(): Queue<T> {
    return new Queue<T>();
  }

  enqueue(item: T): void {
    this.items.append(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.head.value;
  }

  length(): number {
    return this.items.length();
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }
}

export default Queue;
