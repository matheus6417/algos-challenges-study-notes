import Stack from '../data-structures/stack';

class MinStack extends Stack<number> {
  _min: number;

  _minStack: Stack<number>;

  constructor() {
    super();
    this._min = null;
    this._minStack = new Stack<number>();
  }

  getMin(): number {
    return this._min;
  }

  push(value: number) {
    if (this._min === null || value < this._min) {
      this._min = value;
      this._minStack.push(value);
    }
    this.items.push(value);
  }

  pop(): null | number {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.items.pop();
    if (poppedValue === this._min) {
      this._minStack.pop();
      if (this._minStack.isEmpty()) {
        this._min = null;
      } else {
        const newMin = this._minStack.peek();
        this._min = newMin;
      }
    }
    return poppedValue;
  }
}

export default MinStack;
