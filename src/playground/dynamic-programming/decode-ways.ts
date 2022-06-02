function numDecodings(s: string): number {
  return numDecodingsRecursive(s, 0);
}

function numDecodingsRecursive(s: string, index: number): number {
  if (s.length === 0 || s[index] === '0') {
    return 0;
  }
  if (index >= s.length) {
    return 1;
  }
  if (s[index] === '1' && index < s.length - 1) {
    return (
      numDecodingsRecursive(s, index + 1) + numDecodingsRecursive(s, index + 2)
    );
  }
  if (
    index < s.length - 1 &&
    s[index] === '2' &&
    s[index + 1] >= '0' &&
    s[index + 1] <= '6'
  ) {
    return (
      numDecodingsRecursive(s, index + 1) + numDecodingsRecursive(s, index + 2)
    );
  }
  return numDecodingsRecursive(s, index + 1);
}
