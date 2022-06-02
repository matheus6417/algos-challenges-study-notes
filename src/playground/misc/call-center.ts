class Call {
  priority: boolean;

  constructor(priority?: boolean) {
    this.priority = priority || false;
  }
}

type NextOptions = 'priority0' | 'priority1' | 'regular';

class CallCenter {
  queue: Call[];

  priorityQueue: Call[];

  next: NextOptions;

  constructor() {
    this.queue = [];
    this.priorityQueue = [];
    this.next = 'regular';
  }

  addCall(call: Call) {
    if (call.priority) {
      this.priorityQueue.push();
    } else {
      this.queue.push();
    }
  }

  setNext(next: NextOptions) {
    this.next = next;
  }

  getNextCall(): Call | null {
    if (this.queue.length === 0 && this.priorityQueue.length === 0) {
      return null;
    }
    if (this.priorityQueue.length === 0) {
      return this.queue.pop();
    }
    if (this.queue.length === 0) {
      return this.priorityQueue.pop();
    }
    if (this.next === 'regular') {
      this.setNext('priority0');
      return this.queue.pop();
    }
    if (this.next === 'priority0') {
      this.setNext('priority1');
      return this.priorityQueue.pop();
    }
    if (this.next === 'priority1') {
      this.setNext('regular');
      return this.priorityQueue.pop();
    }
  }
}
