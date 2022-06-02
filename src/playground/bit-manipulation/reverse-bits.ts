function reverseBits(n: number): number {
  if (n === 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < 32; i++) {
    const resultBin = (result >>> 0).toString(2);
    const nBin = (n >>> 0).toString(2);
    result <<= 1;
    if ((n & 1) === 1) {
      result++;
    }
    n >>= 1;
  }

  return result;
}

console.log(reverseBits(0b00000010100101000001111010011100));
