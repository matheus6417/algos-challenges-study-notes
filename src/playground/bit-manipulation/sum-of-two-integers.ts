function getSum(a: number, b: number) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  while (b !== 0) {
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
}

console.log(getSum(5, 7));
