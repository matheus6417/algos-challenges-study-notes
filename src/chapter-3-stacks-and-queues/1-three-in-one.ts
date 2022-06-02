// describe how you could usa a single array to implement three stacks

// A stack can easily be implement using an array in Javascript
// because Array data type already has .push() and .pop() operations implemented.
class ThreeInOneStack<T> {
  items: T[];

  secondBottomIndex: number;

  secondTopIndex: number;

  constructor() {
    this.items = [];
    this.secondBottomIndex = 0;
    this.secondTopIndex = 0;
  }

  static create() {
    return new ThreeInOneStack();
  }

  length1(): number {
    return this.secondBottomIndex;
  }

  length2(): number {
    return this.secondTopIndex - this.secondBottomIndex;
  }

  length3(): number {
    return this.items.length - this.secondTopIndex;
  }

  isEmpty1(): boolean {
    return this.length1() === 0;
  }

  isEmpty2(): boolean {
    return this.length2() === 0;
  }

  isEmpty3(): boolean {
    return this.length3() === 0;
  }

  push1(value: T): void {
    this.items.unshift(value);
    this.secondBottomIndex += 1;
    this.secondTopIndex += 1;
  }

  push2(value: T): void {
    this.items.splice(this.secondTopIndex, 0, value);
    this.secondTopIndex += 1;
  }

  push3(value: T): void {
    this.items.push(value);
  }

  pop1(): T | null {
    if (this.isEmpty1()) {
      return null;
    }
    const poppedItem = this.items.shift();
    this.secondBottomIndex -= 1;
    this.secondTopIndex -= 1;

    return poppedItem;
  }

  pop2(): T | null {
    if (this.isEmpty2()) {
      return null;
    }
    const itemToPop = this.items[this.secondTopIndex - 1];
    this.items.splice(this.secondTopIndex - 1, 1);
    this.secondTopIndex -= 1;
    return itemToPop;
  }

  pop3(): T | null {
    if (this.isEmpty3()) {
      return null;
    }
    return this.items.pop();
  }

  peek1(): T | null {
    return this.isEmpty1() ? null : this.items[0];
  }

  peek2(): T | null {
    return this.isEmpty2() ? null : this.items[this.secondTopIndex - 1];
  }

  peek3(): T | null {
    return this.isEmpty3() ? null : this.items[this.items.length - 1];
  }
}

export default ThreeInOneStack;
