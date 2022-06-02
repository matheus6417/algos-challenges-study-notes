import insert from '../1-insertion';

describe('Insertion', () => {
  it('should correctly insert into number', () => {
    const num1 = 0b10000000000;
    const num2 = 0b10011;

    expect(insert(num1, num2, 2, 6)).toBe(0b10001001100);
  });
});
