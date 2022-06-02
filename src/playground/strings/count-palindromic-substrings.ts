function countSubstrings(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length) {
      if (s[left] === s[right]) {
        count++;
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) {
        break;
      }
      count++;
      left--;
      right++;
    }
  }

  return count;
}

console.log(countSubstrings('fdsklf'));
