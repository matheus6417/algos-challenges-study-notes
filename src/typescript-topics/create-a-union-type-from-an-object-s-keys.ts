// import { Equal, Expect } from "../helpers/type-utils";

// const testingFrameworks = {
//   vitest: {
//     label: "Vitest",
//   },
//   jest: {
//     label: "Jest",
//   },
//   mocha: {
//     label: "Mocha",
//   },
// };

// type TestingFramework = unknown;

// type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];

// Challenge
// The vitest, jest, and mocha keys need to be extracted into a union type.

// You could satisfy the test by manually creating a union like so:

// type TestingFramework = 'vitest' | 'jest' | 'mocha';

// But the ideal solution is to create the union by directly extracting keys from the object using typeof and some new syntax

import { Equal, Expect } from '../helpers/type-utils';

const testingFrameworks = {
  vitest: {
    label: 'Vitest',
  },
  jest: {
    label: 'Jest',
  },
  mocha: {
    label: 'Mocha',
  },
};

type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, 'vitest' | 'jest' | 'mocha'>>];
