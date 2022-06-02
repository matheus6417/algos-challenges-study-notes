import ThreeInOneStack from '../1-three-in-one';

describe('ThreeInOneStack', () => {
  it('should create a new threeInOneStack on calling create()', () => {
    const threeInOneStack = ThreeInOneStack.create();
    expect(threeInOneStack).toHaveProperty('items');
    expect(threeInOneStack).toHaveProperty('secondBottomIndex');
    expect(threeInOneStack).toHaveProperty('secondTopIndex');
  });
  it('should return true when the first threeInOneStack is empty and false if it has elements on calling isEmpty1() ', () => {
    const threeInOneStack = ThreeInOneStack.create();
    expect(threeInOneStack.isEmpty1()).toBe(true);
    threeInOneStack.push1('a');
    expect(threeInOneStack.isEmpty1()).toBe(false);
    threeInOneStack.pop1();
    expect(threeInOneStack.isEmpty1()).toBe(true);
    threeInOneStack.push1('b');
    expect(threeInOneStack.isEmpty1()).toBe(false);
  });
  it('should return true when the second threeInOneStack is empty and false if it has elements on calling isEmpty2() ', () => {
    const threeInOneStack = ThreeInOneStack.create();
    expect(threeInOneStack.isEmpty2()).toBe(true);
    threeInOneStack.push2('a');
    expect(threeInOneStack.isEmpty2()).toBe(false);
    threeInOneStack.pop2();
    expect(threeInOneStack.isEmpty2()).toBe(true);
    threeInOneStack.push2('b');
    expect(threeInOneStack.isEmpty2()).toBe(false);
  });
  it('should return true when the second threeInOneStack is empty and false if it has elements on calling isEmpty3() ', () => {
    const threeInOneStack = ThreeInOneStack.create();
    expect(threeInOneStack.isEmpty3()).toBe(true);
    threeInOneStack.push3('a');
    expect(threeInOneStack.isEmpty3()).toBe(false);
    threeInOneStack.pop3();
    expect(threeInOneStack.isEmpty3()).toBe(true);
    threeInOneStack.push3('b');
    expect(threeInOneStack.isEmpty3()).toBe(false);
  });
  it('should properly push on push1()', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push1('a');
    expect(threeInOneStack.length1()).toBe(1);
    expect(threeInOneStack.secondBottomIndex).toBe(1);
    expect(threeInOneStack.secondTopIndex).toBe(1);
  });
  it('should properly push on push2()', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push2('b');
    threeInOneStack.push2('c');
    expect(threeInOneStack.length2()).toBe(2);
    expect(threeInOneStack.secondTopIndex).toBe(2);
    expect(threeInOneStack.secondBottomIndex).toBe(0);
  });
  it('should properly push on push3()', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push3('d');
    threeInOneStack.push3('e');
    threeInOneStack.push3('f');
    expect(threeInOneStack.length3()).toBe(3);
    expect(threeInOneStack.items.length).toBe(3);
  });
  it('should properly keep track of indexes on push1(), push2(), push3()', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push1(1);
    threeInOneStack.push3(4);
    threeInOneStack.push3(5);
    threeInOneStack.push3(6);
    threeInOneStack.push2(2);
    threeInOneStack.push2(3);

    expect(threeInOneStack.length3()).toBe(3);
    expect(threeInOneStack.items.length).toBe(6);
    expect(threeInOneStack.items).toMatchObject([1, 2, 3, 4, 5, 6]);
  });
  it('should return null if pop1(), pop2() and pop3() are invoked on an empty stacks', () => {
    const threeInOneStack = ThreeInOneStack.create();
    const pop1 = threeInOneStack.pop1();
    const pop2 = threeInOneStack.pop2();
    const pop3 = threeInOneStack.pop3();
    expect(pop1).toBe(null);
    expect(pop2).toBe(null);
    expect(pop3).toBe(null);
  });
  it('should return top element if pop1(), pop2(), and pop3() are invoked on an nonempty stacks', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push1('a');
    threeInOneStack.push2('b');
    threeInOneStack.push3('c');
    const pop1 = threeInOneStack.pop1();
    const pop2 = threeInOneStack.pop2();
    const pop3 = threeInOneStack.pop3();
    expect(pop1).toBe('a');
    expect(pop2).toBe('b');
    expect(pop3).toBe('c');
  });
  it('should return null if peek1(), peek2() and peek3() are invoked on an empty stacks', () => {
    const threeInOneStack = ThreeInOneStack.create();
    const peek1 = threeInOneStack.peek1();
    const peek2 = threeInOneStack.peek2();
    const peek3 = threeInOneStack.peek3();
    expect(peek1).toBe(null);
    expect(peek2).toBe(null);
    expect(peek3).toBe(null);
  });
  it('should return the top element if peek1(), peek2() and peek3() are invoked on a non-empty threeInOneStack', () => {
    const threeInOneStack = ThreeInOneStack.create();
    threeInOneStack.push1('a');
    threeInOneStack.push2('b');
    threeInOneStack.push3('c');

    const peek1 = threeInOneStack.peek1();
    const peek2 = threeInOneStack.peek2();
    const peek3 = threeInOneStack.peek3();
    expect(peek1).toBe('a');
    expect(peek2).toBe('b');
    expect(peek3).toBe('c');

    threeInOneStack.push1('d');
    threeInOneStack.push2('e');
    threeInOneStack.push3('f');

    const peek12 = threeInOneStack.peek1();
    const peek22 = threeInOneStack.peek2();
    const peek32 = threeInOneStack.peek3();

    expect(peek12).toBe('d');
    expect(peek22).toBe('e');
    expect(peek32).toBe('f');
  });
});
