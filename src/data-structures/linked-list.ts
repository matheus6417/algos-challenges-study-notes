class Node<T> {
  value: T;

  next: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: Node<T> | null;

  tail: Node<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  static create<T>(array = []): LinkedList<T> {
    const newList = new LinkedList<T>();
    for (let i = 0; i < array.length; i++) {
      newList.append(array[i]);
    }
    return newList;
  }

  append(value: T): LinkedList<T> {
    const node = new Node<T>(value);
    // if list is empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  length(): number {
    let temp = this.head;
    let countOfNodes = 0;

    while (temp) {
      temp = temp.next;
      countOfNodes += 1;
    }
    return countOfNodes;
  }

  // insert one item to the beginning of the list
  unshift(value: T) {
    const node = new Node<T>(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // remove one item from the beginning of the list
  shift(): T | null {
    if (!this.head) {
      return null;
    }
    const nodeToRemove = this.head;
    this.head = this.head.next;
    return nodeToRemove.value;
  }

  // this method is only for testing and has an O(n) look-up,
  // if you think you need this, use an array instead.
  _getNodeByIndex(index: number): Node<T> | undefined {
    let temp = this.head;
    let countOfNodes = 0;

    if (temp === null) {
      return;
    }
    let runner = temp.next;
    while (runner) {
      if (countOfNodes === index) {
        return temp;
      }
      temp = runner;
      runner = runner.next;
      countOfNodes += 1;
    }
    // check for the last node
    if (countOfNodes === index) {
      return temp;
    }
  }

  toArray(): T[] {
    const array = [];
    let cur = this.head;
    while (cur) {
      if (cur.value !== undefined) {
        array.push(cur.value);
      }
      cur = cur.next;
    }

    return array;
  }
}

export default LinkedList;
