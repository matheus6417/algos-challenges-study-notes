import { toGoatLatin } from '../goat-latin';

describe('toGoatLatin', () => {
  it('should return the converted sentence to Goat Latin', () => {
    expect(toGoatLatin('I speak Goat Latin')).toBe(
      'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
    );
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe(
      'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
    );
  });
});
