import SetOfStacks from '../3-set-of-stacks';

describe('SetOfStacks', () => {
  it('should create a new SetOfStacks on calling create(length) with maxIndividualLength === length', () => {
    const setOfStacks = SetOfStacks.create(5);
    expect(setOfStacks).toHaveProperty('stackOfStacks');
    expect(setOfStacks).toHaveProperty('maxIndividualLength');
    expect(setOfStacks.maxIndividualLength).toBe(5);
  });
  it('should create a new SetOfStacks on calling create() with maxIndividualLength = 10', () => {
    const setOfStacks = SetOfStacks.create();
    expect(setOfStacks.maxIndividualLength).toBe(10);
  });
  it('should throw an error if maxIndividualLength passed to create() is not positive', () => {
    expect(() => {
      SetOfStacks.create(-1);
    }).toThrow();
    expect(() => {
      SetOfStacks.create(1);
    }).not.toThrow();
  });
  it('should create a new stack in the stack of stacks on push() if maxIndividualLength === 1', () => {
    const setOfStacks = SetOfStacks.create(1);
    setOfStacks.push(1);
    expect(setOfStacks.stackOfStacks.items.length).toBe(1);
    setOfStacks.push(2);
    expect(setOfStacks.stackOfStacks.items.length).toBe(2);
    setOfStacks.push(3);
    expect(setOfStacks.stackOfStacks.items.length).toBe(3);
    setOfStacks.push(4);
    expect(setOfStacks.stackOfStacks.items.length).toBe(4);
  });
  it('should properly push to the current stack if its not full', () => {
    const setOfStacks = SetOfStacks.create(3);
    setOfStacks.push('octopus');
    setOfStacks.push('dog');
    setOfStacks.push('kedi');
    expect(setOfStacks.stackOfStacks.items.length).toBe(1);

    setOfStacks.push('walrus');
    expect(setOfStacks.stackOfStacks.items.length).toBe(2);
  });
  it('should properly calculate the length of the stack', () => {
    const setOfStacks = SetOfStacks.create(3);
    expect(setOfStacks.length()).toBe(0);

    setOfStacks.push('octopus');
    setOfStacks.push('dog');
    setOfStacks.push('kedi');
    expect(setOfStacks.length()).toBe(3);

    setOfStacks.push('walrus');
    setOfStacks.push('beluga');
    expect(setOfStacks.length()).toBe(5);
  });
  it('should return true if isEmpty() is called on an empty stack and false vice versa', () => {
    const setOfStacks = SetOfStacks.create(3);
    expect(setOfStacks.isEmpty()).toBe(true);

    setOfStacks.push('octopus');
    setOfStacks.push('dog');
    setOfStacks.push('kedi');
    expect(setOfStacks.isEmpty()).toBe(false);
  });
  it('should return null if pop() is called on an empty stack', () => {
    const setOfStacks = SetOfStacks.create(3);
    expect(setOfStacks.pop()).toBe(null);
  });
  it('should properly return the last element on pop and pop a stack if its the only element in the last stack', () => {
    const setOfStacks = SetOfStacks.create(4);
    setOfStacks.push('mona');
    setOfStacks.push('milo');
    setOfStacks.push('mika');
    const poppedElement = setOfStacks.pop();
    expect(poppedElement).toBe('mika');

    setOfStacks.push('mika');
    setOfStacks.push('bonbon');
    setOfStacks.push('benji');
    expect(setOfStacks.stackOfStacks.items.length).toBe(2);
    setOfStacks.pop();
    expect(setOfStacks.stackOfStacks.items.length).toBe(1);
  });
});
