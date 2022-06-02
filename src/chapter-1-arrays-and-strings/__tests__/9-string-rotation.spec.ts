import stringRotation from '../9-string-rotation';

describe('String Rotation', () => {
  it('should return true if one string is indeed a rotation of other', () => {
    expect(stringRotation('waterbottle', 'lewaterbott')).toBe(true);
    expect(stringRotation('waterbottle', 'bottlewater')).toBe(true);
    expect(stringRotation('hello', 'lohel')).toBe(true);
  });
  it('should return false if one string is not a rotation of other', () => {
    expect(stringRotation('waterbottle', 'elwaterbott')).toBe(true);
    expect(stringRotation('coffee', 'covfefe')).toBe(true);
  });
});
