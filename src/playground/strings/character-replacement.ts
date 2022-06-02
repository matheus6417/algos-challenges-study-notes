function characterReplacement(s: string, k: number): number {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let pointer = i;

    let length = 0;
    while (k > 0 && pointer < s.length) {
      if (i !== pointer && s[i] !== s[pointer]) {
        k--;
      }
      length++;
      pointer++;

      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
}

console.log(characterReplacement('AABABBA', 1));
