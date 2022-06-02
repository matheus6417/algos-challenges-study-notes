function minWindow(s: string, t: string): string {
  if (t === '') {
    return t;
  }

  const countT = {};
  const window = {};

  for (let i = 0; i < t.length; i++) {
    const currentChar = t[i];

    countT[currentChar] = 1 + (countT[currentChar] || 0);
  }

  const result = [-1, -1];
  let resLength = Number.MAX_SAFE_INTEGER;

  let left = 0;
  let have = 0;
  const need = t.length;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    window[currentChar] = 1 + (window[currentChar] || 0);

    if (currentChar in countT && countT[currentChar] === window[currentChar]) {
      have++;
    }
    while (have === need) {
      if (right - left + 1 < resLength) {
        result[0] = left;
        result[1] = right;
        resLength = right - left + 1;
      }
      window[currentChar]--;

      if (s[left] in countT && window[s[left]] < countT[s[left]]) {
        have--;
      }
      left++;
    }
  }

  const [finalLeft, finalRight] = result;

  if (resLength > 0) {
    return s.substring(finalLeft, finalRight);
  }
  return '';
}
