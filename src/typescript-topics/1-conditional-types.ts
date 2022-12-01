// type WrapStringInArray<T> = T extends string ? Array<string> : T;
// const sw: WrapStringInArray<number> = 6;

// type WrapStringsInArrays<T> = {
//   [K in keyof T]: T[K] extends string ? Array<string> : T[K]
// };

// type UserType = {
//   name: string
//   email: string
//   age: number
// };

// const matheus: WrapStringsInArrays<UserType> = {
//   name: ['matheus'],
//   email: ['matheus@example.com'],
//   age: 28,
// };
// console.log(matheus.name)

// 1
// const matheus: WrapStringsInArrays<UserType> = {
//   name: 'matheus',
//   email: ['matheus@example.com'],
//   age: 28,
// };
// console.log(matheus.name)

// 2
// const matheus: WrapStringsInArrays<UserType> = {
//   name: ['matheus'],
//   email: ['amir@example.com'],
//   age: [28],
// };
// console.log(matheus.name)

// type ReplaceNumberPropertiesWithNull<T> = {
//   [K in keyof T]: T[K] extends number ? null : T[K]
//  };

//  type UserType = {
//    name: string
//    age: number
//  };

//  /* We make two different Matheus variables to make sure that the type has
//   * exactly the property types we expect. */
//  const matheus1: ReplaceNumberPropertiesWithNull<UserType> = {
//    name: 'Matheus',
//    age: 123,
//  };
//  const matheus2: {name: string, age: null} = matheus1;
