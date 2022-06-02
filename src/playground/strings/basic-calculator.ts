function calculate(s: string): number {
  let sign = 1; // 1 or -1

  let sum = 0;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (isDigit(currentChar)) {
      let num = 0;

      while (i < s.length && isDigit(s[i])) {
        num = num * 10 + parseInt(s[i], 10);
        i++;
      }
      sum = sum + num * sign;
      i--;
    }

    if (currentChar === '+') {
      sign = 1;
    }
    if (currentChar === '-') {
      sign = -1;
    }
    if (currentChar === '(') {
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
    }
    if (currentChar === ')') {
      sum = stack.pop() * sign;
      sum += stack.pop();
    }
  }
  return sum;
}

function isDigit(char) {
  return char <= '9' && char >= '0';
}

console.log(calculate('(12+(4+5+2)-3)+(6+8)'));
