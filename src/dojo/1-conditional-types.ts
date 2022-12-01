// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const sw: WrapStringInArray<string> = ['hello'];

// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const sq: WrapStringInArray<string> = 'hello';

// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const nd: WrapStringInArray<number> = 1;

// type WrapStringsInArrays<T> = {
//   [K in keyof T]: T[K] extends string ? Array<string> : T[K]
// };

// type User = {
//   name: string
//   email: string
//   age: number
// };

// const matheus: WrapStringsInArrays<User> = {
//   name: ['matheus'],
//   email: ['matheus@example.com'],
//   age: 28,
// };
// matheus.name;

// 1
// const matheus: WrapStringsInArrays<User> = {
//   name: 'matheus',
//   email: ['matheus@example.com'],
//   age: 28,
// };
// matheus.name;

// const matheus: WrapStringsInArrays<User> = {
//   name: ['matheus'],
//   email: ['amir@example.com'],
//   age: [28],
// };
// matheus.name;

// type ReplaceNumberPropertiesWithNull<T> = {
//   ///
//  };

//  type User = {
//    name: string
//    age: number
//  };

//  /* We make two different MAtheus variables to make sure that the type has
//   * exactly the property types we expect. */
//  const amir1: ReplaceNumberPropertiesWithNull<User> = {
//    name: 'Matheus',
//    age: null,
//  };
//  const matheus2: {name: string, age: null} = matheus1;
//  matheus2;
