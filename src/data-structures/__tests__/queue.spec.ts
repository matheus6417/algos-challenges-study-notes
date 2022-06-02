import Queue from '../queue';

describe('queue', () => {
  it('should create a new queue on calling create()', () => {
    const queue = Queue.create();
    expect(queue).toHaveProperty('items');
    expect(queue).toHaveProperty('length');
  });
  it('should return true when the queue is empty and false if it has elements on calling isEmpty() ', () => {
    const queue = Queue.create();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('a');
    expect(queue.isEmpty()).toBe(false);
  });
  it('should properly add into the queue on enqueue()', () => {
    const queue = Queue.create();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.length()).toBe(2);
    expect(queue.items).toMatchObject(['a', 'b']);
  });
  it('should properly dequeue from queue on dequeue()', () => {
    const queue = Queue.create();
    queue.enqueue('a');
    queue.enqueue('b');

    const firstToLeave = queue.dequeue();
    expect(firstToLeave).toBe('a');
    expect(queue.length()).toBe(1);
    expect(queue.items).toMatchObject(['b']);

    const secondToLeave = queue.dequeue();
    expect(secondToLeave).toBe('b');
    expect(queue.length()).toBe(0);
    expect(queue.items).toMatchObject([]);
  });
  it('should return null if dequeue() is invoked on an empty queue', () => {
    const queue = Queue.create();
    const dequeuedElement = queue.dequeue();
    expect(dequeuedElement).toBe(null);
  });
  it('should return null if peek() is invoked on an empty stack', () => {
    const queue = Queue.create();
    const peekedElement = queue.peek();
    expect(peekedElement).toBe(null);
  });
  it('should return the top element if peek() is invoked on a non-empty queue', () => {
    const queue = Queue.create();
    queue.enqueue('a');
    queue.enqueue('b');

    const peekedElement = queue.peek();
    expect(peekedElement).toBe('a');
    expect(queue.items).toMatchObject(['a', 'b']);
  });
});
