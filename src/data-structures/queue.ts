class Queue<T> {
  items: T[];

  constructor() {
    this.items = [];
  }

  static create<T>() {
    return new Queue<T>();
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek(): boolean | T {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  length(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }
}

export default Queue;
