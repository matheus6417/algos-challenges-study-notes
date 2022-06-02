import MinStack from '../2-min-stack';

describe('MinStack', () => {
  it('should create a new threeInOneStack on calling create()', () => {
    const minStack = new MinStack();
    expect(minStack).toHaveProperty('items');
    expect(minStack).toHaveProperty('length');
    expect(minStack).toHaveProperty('_min');
    expect(minStack).toHaveProperty('_minStack');
  });
  it('should return minimum on calling getMin() ', () => {
    const minStack = new MinStack();
    expect(minStack.getMin()).toBe(null);

    minStack.push(-100);
    expect(minStack.getMin()).toBe(-100);

    minStack.push(0);
    expect(minStack.getMin()).toBe(-100);

    minStack.push(-200);
    expect(minStack.getMin()).toBe(-200);

    // removes -200 new min is -100
    minStack.pop();
    expect(minStack.getMin()).toBe(-100);

    // removes 0 new min is still -100
    minStack.pop();
    expect(minStack.getMin()).toBe(-100);

    // removes -100 new min is null
    minStack.pop();
    expect(minStack.getMin()).toBe(null);
  });
  it('should push and update the min if the new element is smaller ', () => {
    const minStack = new MinStack();
    minStack.push(0);
    expect(minStack.getMin()).toBe(0);

    minStack.push(-1);
    expect(minStack.getMin()).toBe(-1);
  });
  it('should push and not update the min if the new element is bigger than min ', () => {
    const minStack = new MinStack();
    minStack.push(0);
    expect(minStack.getMin()).toBe(0);

    minStack.push(1);
    expect(minStack.getMin()).toBe(0);
  });
  it('should return null if pop is invoked on empty stack', () => {
    const minStack = new MinStack();
    const poppedElement = minStack.pop();
    expect(poppedElement).toBe(null);
  });
  it('should pop from minStack if minValue is popped', () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(1);
    minStack.push(-1);

    expect(minStack._minStack.length()).toBe(2);
    expect(minStack._minStack.items).toMatchObject([0, -1]);

    minStack.pop();
    expect(minStack._minStack.length()).toBe(1);
    expect(minStack._minStack.items).toMatchObject([0]);

    minStack.pop();
    expect(minStack._minStack.length()).toBe(1);
    expect(minStack._minStack.items).toMatchObject([0]);

    minStack.pop();
    expect(minStack._minStack.length()).toBe(0);
    expect(minStack._minStack.items).toMatchObject([]);
    expect(minStack.getMin()).toBe(null);
  });
});
