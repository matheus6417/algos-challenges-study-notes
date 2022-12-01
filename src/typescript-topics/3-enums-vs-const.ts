// // ENUM GEY INDEXES AS VALUES
// // P1: ANY NUMBER CAN BE PASSED AS VALUE, NO ERRORS
// enum AuthMethod {
//   push,
//   voice
// }

// console.log(AuthMethod)
// console.log(AuthMethod.push);

// const authMethod = (method: AuthMethod) => {
//   console.log(method);

// }

// authMethod('23123')
// // ENUM WITH VALUES STILL HAVE INDEXES AS VALUES
// // P1: ANY NUMBER CAN BE PASSED AS VALUE, NO ERRORS
// enum AuthMethod2 {
//   push = 1,
//   voice = 2
// }

// console.log(AuthMethod2)
// console.log(AuthMethod2.push);
// console.log(AuthMethod2.voice);

// const authMethod2 = (method: AuthMethod2) => {
//   console.log(method);

// }

// authMethod2(2)

// // ENUM WITH VALUES STILL HAVE INDEXES AS VALUES
// // P1:
// // P2: ANY STRING CAN BE PASSED AS VALUE, NO ERRORS
// enum AuthMethod3 {
//   push = 'push',
//   voice = 'voice'
// }

// console.log(AuthMethod3)
// console.log(AuthMethod3.push);
// console.log(AuthMethod3.voice);

// const authMethod3 = (method: AuthMethod3) => {
//   console.log(method);
// }

// authMethod3(AuthMethod3.push)

// // OBJECT INSTEAD ENUM

// const AuthMethod4 = {
//   push: 'push',
//   voice: 'voice'
// } as const

// type AuthMethod4 = typeof AuthMethod4[keyof typeof AuthMethod4]

// console.log(typeof AuthMethod4);

// console.log(AuthMethod4)
// console.log(AuthMethod4.push);
// console.log(AuthMethod4.voice);

// const authMethod4 = (method: AuthMethod4) => {
//   console.log(method);
// }

// authMethod4(AuthMethod4.push)
