// push
// pop
const getParentIndex = (index: number) => Math.floor((index - 1) / 2);
const getLeftChildIndex = (index: number) => index * 2 + 1;
const getRightChildIndex = (index: number) => index * 2 + 2;

export class PriorityQueue {
  private heap: number[];

  private comparator: (a: number, b: number) => boolean;

  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.comparator = comparator;
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek(): number {
    if (!this.isEmpty()) {
      return this.heap[0];
    }
    return -1;
  }

  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  private siftUp() {
    let nodeIndex = this.size() - 1;
    let parentIndex = getParentIndex(nodeIndex);

    while (nodeIndex > 0 && this.compare(nodeIndex, parentIndex)) {
      this.swap(nodeIndex, parentIndex);
      nodeIndex = parentIndex;
      parentIndex = getParentIndex(nodeIndex);
    }
  }

  private siftDown() {
    let nodeIndex = 0;
    let leftChildIndex = getLeftChildIndex(nodeIndex);
    let rightChildIndex = getRightChildIndex(nodeIndex);

    while (
      (leftChildIndex < this.size() &&
        this.compare(leftChildIndex, nodeIndex)) ||
      (rightChildIndex < this.size() &&
        this.compare(rightChildIndex, nodeIndex))
    ) {
      const greaterNodeIndex =
        getRightChildIndex(nodeIndex) < this.size() &&
        this.compare(rightChildIndex, leftChildIndex)
          ? rightChildIndex
          : leftChildIndex;

      this.swap(greaterNodeIndex, nodeIndex);

      nodeIndex = greaterNodeIndex;
      leftChildIndex = getLeftChildIndex(nodeIndex);
      rightChildIndex = getRightChildIndex(nodeIndex);
    }
  }

  compare(i: number, j: number) {
    return this.comparator(this.heap[i], this.heap[j]);
  }

  push(value: number): number {
    this.heap.push(value);
    this.siftUp();
    return this.size();
  }

  pop(): number {
    if (this.size() > 1) {
      this.swap(0, this.size() - 1);
    }
    const poppedItem = this.heap.pop();
    this.siftDown();
    return poppedItem;
  }
}
