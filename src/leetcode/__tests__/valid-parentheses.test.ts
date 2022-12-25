import { isValid } from '../valid-parentheses';

describe('isValid', () => {
  test('valid cases', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[()]}')).toBe(true);
    expect(isValid('{[()]}{[()]}')).toBe(true);
  });

  test('invalid cases', () => {
    expect(isValid('(')).toBe(false);
    expect(isValid('[')).toBe(false);
    expect(isValid('{')).toBe(false);
    expect(isValid('(]')).toBe(false);
    expect(isValid('[)')).toBe(false);
    expect(isValid('{)')).toBe(false);
    expect(isValid('{[(]}}')).toBe(false);
  });
});
