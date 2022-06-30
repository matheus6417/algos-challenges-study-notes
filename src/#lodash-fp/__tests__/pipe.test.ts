import { doPipe } from '../pipe';

describe('pipe', () => {
  test.each<[number, number]>([
    [20, 42],
    [10, 22],
    [100, 202],
    [0, 2],
  ])('for %j should return %s', (input, result) => {
    expect(doPipe(input)).toStrictEqual(result);
  });
});
