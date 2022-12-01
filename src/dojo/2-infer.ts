// type ArrayContents<T extends Array<any>> = T[number];
// const mtest: ArrayContents<Array<number>> = 'one';

// type ArrayContents<T> =
//   T extends Array<infer ElementType>
//   ? ElementType
//   : never;
// const mtest: ArrayContents<Array<number>> = 'one';

// type ArrayContents<T> =
//   T extends Array<infer ElementType>
//   ? ElementType
//   : never;
//   const mtest: ArrayContents<{name: string}> = 1;

// type ArrayContents<T> =
//   T extends Array<ElementType>
//   ? ElementType
//   : never;

// const mtest: ArrayContents<Array<number>> = 1;

// type OurReturnType<Func> =
//   Func extends (...args: any) => infer Return
//   ? Return
//   : never;

// function add(x: number, y: number): number {
//   return x + y;
// }

// const mtest: OurReturnType<typeof add> = '123';
