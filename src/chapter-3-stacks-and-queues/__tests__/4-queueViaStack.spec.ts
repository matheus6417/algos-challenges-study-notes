import MyQueue from '../4-queue-via-stacks';

describe('MyQueue', () => {
  it('should create a new SetOfStacks on calling create(length) with maxIndividualLength === length', () => {
    const queue = MyQueue.create();
    expect(queue).toHaveProperty('frontStack');
    expect(queue).toHaveProperty('backStack');
  });
  it('should properly enqueue on enqueue()', () => {
    const queue = MyQueue.create();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    expect(queue.length()).toBe(4);
  });
  it('should return null on empty on dequeue()', () => {
    const queue = MyQueue.create();
    expect(queue.dequeue()).toBe(null);
  });
  it('should properly shift and dequeue the first item that was queued', () => {
    const queue = MyQueue.create();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');

    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBe('b');
    expect(queue.dequeue()).toBe('c');
    expect(queue.dequeue()).toBe('d');
  });
  it('should return null on empty queue on peek()', () => {
    const queue = MyQueue.create();
    expect(queue.peek()).toBe(null);
  });
  it('should return the first added element on peek()', () => {
    const queue = MyQueue.create();
    queue.enqueue('sapporo');
    queue.enqueue('tokyo');
    queue.enqueue('hiroshima');
    queue.enqueue('fukuoka');
    expect(queue.peek()).toBe('sapporo');

    queue.enqueue('kyoto');
    expect(queue.peek()).toBe('sapporo');
  });
});
