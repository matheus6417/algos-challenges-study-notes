import stringCompression from '../6-string-compression';

describe('String Compression Algorithm', () => {
  it('should properly compress string', () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression('aabbaabb')).toBe('a2b2a2b2');
    expect(stringCompression('aaaaaaaa')).toBe('a8');
    expect(stringCompression('aa')).toBe('a2');
  });
  it('should return the original string if no compression were performed', () => {
    expect(stringCompression('abcd')).toBe('abcd');
    expect(stringCompression('a')).toBe('a');
    expect(stringCompression('')).toBe('');
  });
});
