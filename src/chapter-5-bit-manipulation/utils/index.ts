export const print = (num: number) => {
  console.log((num >>> 0).toString(2));
};

export const getBit = (num: number, digit: number) => {
  return (num & (1 << digit)) !== 0;
};

export const setBit = (num: number, digit: number) => {
  return num | (1 << digit);
};

export const clearBit = (num: number, digit: number) => {
  const mask = ~(1 << digit);
  return num & mask;
};

export const clearBitsMSBThroughI = (num: number, digit: number) => {
  const mask = (1 << digit) - 1;
  return num & mask;
};

export const clearBitsIThrough0 = (num: number, digit: number) => {
  const mask = ~(1 << (digit - 1));
  return num & mask;
};

export const updateBit = (num: number, digit: number, value: 0 | 1) => {
  const mask = ~(1 << digit);
  const shiftedValue = 1 << value;

  return (num & mask) | shiftedValue;
};
