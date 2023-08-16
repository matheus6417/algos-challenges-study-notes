// import { Equal, Expect } from "../helpers/type-utils";

// const getUser = () => {
//   return Promise.resolve({
//     id: "123",
//     name: "John",
//     email: "john@example.com",
//   });
// };

// type ReturnValue = ReturnType<typeof getUser>;

// type tests = [
//   Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
// ];

// Challenge
// Your job is to extract the awaited result of the promise using a utility type

import { Equal, Expect } from '../helpers/type-utils';

const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
