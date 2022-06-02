import SortableStack from '../5-sortable-stack';

describe('MyQueue', () => {
  it('should create a new SortableStack on calling create(length) with maxIndividualLength === length', () => {
    const sortableStack = SortableStack.create();
    expect(sortableStack).toHaveProperty('sort');
  });
  it('should return the stack if the stack is empty', () => {
    const sortableStack = SortableStack.create();
    expect(sortableStack.sort()).toBe(sortableStack);
  });
  it('should properly sort the stack if the stack is non-empty', () => {
    const sortableStack = SortableStack.create([3, 2, 4, 1, 5, 6]);
    sortableStack.sort();
    expect(sortableStack.items).toMatchObject([6, 5, 4, 3, 2, 1]);
  });
});
