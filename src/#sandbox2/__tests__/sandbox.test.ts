import { sandbox } from '../sandbox';

// create tests for the sandbox function
describe('sandbox', () => {
  test('valid', () => {
    expect(sandbox(true)).toBe(true);
    expect(sandbox(false)).toBe(true);
  });

  test('invalid', () => {
    expect(sandbox('true')).toBe(false);
    expect(sandbox('false')).toBe(false);
  });
});
