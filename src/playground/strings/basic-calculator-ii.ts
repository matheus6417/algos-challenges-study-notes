export function calculate(s: string): number {
  if (s.length === 0) {
    return 0;
  }

  const stack = [];
  let currNum = 0;
  let currOp = '+';

  const allOperators = ['+', '-', '*', '/'];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isDigit(char)) {
      currNum = currNum * 10 + parseInt(s[i], 10);
    }

    if (allOperators.includes(s[i]) || i === s.length - 1) {
      if (currOp === '+') {
        stack.push(currNum);
      } else if (currOp === '-') {
        stack.push(currNum * -1);
      } else if (currOp === '*') {
        const lastNum = stack.pop();
        const product = lastNum * currNum;
        stack.push(product);
      } else if (currOp === '/') {
        const lastNum = stack.pop();
        const quotient = lastNum / currNum;
        stack.push(quotient);
      }
      currNum = 0;
      currOp = char;
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}

function isDigit(char) {
  return char <= '9' && char >= '0';
}

console.log(calculate(' 3/2 '));
