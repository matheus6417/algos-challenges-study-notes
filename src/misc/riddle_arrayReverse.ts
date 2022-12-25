// Please solve the following JavaScript riddle. *
// const input = ["s", "t", "a", "r", "m", "i", "n", "d"];
// const result = [];

// function customReverse(accumulator, letter) {
// // Task 1: Implement this function such that it reverses the array when passing it to Array.prototype.reduce.
// }

// function assignResult(array) {
// // Task 2: Above defined "const result" should hold the value of array.
// }

// assignResult(input.reduce(customReverse, []));
// const testPassed = input.reverse().join("") === result.join("");
// // Bonus question: Why can't we check (result === input.reverse()) to find out whether the test has passed?

const input = ['s', 't', 'a', 'r', 'm', 'i', 'n', 'd'];

const customReverse = (acc: string[], letter: string) => [letter, ...acc];
const result: string[] = input.reduce(customReverse, []);

// const testPassed = [...input].reverse().join("") === result.join("");
const reversedInput: typeof input = [...input].reverse();
const testPassed: boolean = result.every(
  (letter, index) => letter === reversedInput[index]
);
