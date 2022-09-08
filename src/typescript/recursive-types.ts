type NestedNumberArray = number | NestedNumberArray[];

const bad: NestedNumberArray = ['setOfStacks'];
const good: NestedNumberArray = [[[5]]];

// example of good use for recursive types
// multi-line style
// type Json =
//   | null
//   | boolean
//   | string
//   | number
//   | Json[]
//   | {[key: string]: Json};
