import flipToWin from '../3-flip-to-win';

describe('Flip to win', () => {
  it('should find the correct max length', () => {
    expect(flipToWin(1775)).toBe(8);
    expect(flipToWin(9)).toBe(2);
    expect(flipToWin(0b11011001110111)).toBe(7);
  });
});
