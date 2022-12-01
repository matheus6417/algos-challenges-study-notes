function isNumber(n: number | string): n is number {
  return typeof n === 'string';
}
const n: string = 'oh no';
const n2: number = isNumber(n) ? n : 0;

console.log(n2);
