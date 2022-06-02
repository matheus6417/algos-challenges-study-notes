import binaryToString from '../2-binary-to-string';

describe('binary to string', () => {
  it('should properly convert a ratio to binary', () => {
    expect(binaryToString(0.75)).toBe('0.11');
    expect(binaryToString(0.5)).toBe('0.1');
    expect(binaryToString(0.625)).toBe('0.101');
  });

  it('should throw an error if the input is smaller than 0 or larger than 1', () => {
    expect(() => {
      binaryToString(-0.1);
    }).toThrowError('number must be between 0 and 1');

    expect(() => {
      binaryToString(1.1);
    }).toThrowError('number must be between 0 and 1');
    expect(() => {
      binaryToString(0.5);
    }).not.toThrowError('number must be between 0 and 1');
  });

  it('should throw an error if the input cannot be represented with 32 characters', () => {
    expect(() => {
      binaryToString(0.9999999999999999);
    }).toThrowError('The number cannot be represented accurately');
    expect(() => {
      binaryToString(0.75);
    }).not.toThrowError('The number cannot be represented accurately');
  });
});
