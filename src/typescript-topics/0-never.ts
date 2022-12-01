// a never part of a union is always thrown away.

const name1: string = 'Briza';
const name2: string | never = name1;

function returnNumberOrNever(): number | never {
  return 1;
}

const ss = returnNumberOrNever();

// type of values that never occur.

// const reportErrors = () => {
//   throw Error('my error');
// }

// const loop = () => {
//   while(true) {
//     console.log('loop');
//   }
// }

// Variables also acquire the type never when narrowed by any type guards that can never be true

// const format = (value: string | number) => {
//   if (typeof value === 'string') {
//       return value.trim();
//   } if (typeof value === 'number') {
//     return value.toFixed(2)
//   }

//   console.log(value)
// }
