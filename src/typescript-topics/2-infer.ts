/// without infer ArrayContents<T>
// type ArrayContents<T extends Array<any>> = T[number];
// const mtest: ArrayContents<Array<number>> = 1;

// type ArrayContents<T> =
//   T extends Array<infer ElementType>
//   ? ElementType
//   : never;

// const mtest: ArrayContents<{name: string}> = 1;

// const mtest: ArrayContents<Array<number>> = 1;
// const mtest: ArrayContents<Array<number>> = 'one';

// ReturnType utility type

// type OurReturnType<Func> =
//   Func extends (...args: any) => infer Return
//   ? Return
//   : never;

// function add(x: number, y: number): number {
//   return x + y;
// }

// const mtest: ReturnType<typeof add> = '123';

// type SetContents<T> =
//   T extends Set<infer S>
//   ? S
//   : never;

// const xxn: SetContents<Set<number>> = 123;
// const sxx: SetContents<Set<string>> = 'a string';
// [n, s];

// type GetFirstArgumentOfAnyFunction<T> = T extends (
//   first: { second: infer A },
//   ...args: any[]
// ) => any
//   ? A
//   : never

// type t = GetFirstArgumentOfAnyFunction<(first: {second: string}, age: number) => void>
