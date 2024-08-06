// Lesson: Writing your first tests

// Unit tests: verify the correctness of individual units/components of application in isolation
// Intergration tests: verifying on how components work together as whole, issues when combining units, talking between them etc./ compatibility tests
// End to end tests: simulate user interactions with entire system.

// Testing pyramid**
// - the higher you go up the slower the test but the more confidence you get from it

// Testing Framework
// - Test Runner
// - Assertion Libraries
// - Mocking Tools
// - Coverage tools

//REFACTORING THIS:
// export function max(a, b) {
//   if (a > b) return a;
//   else if (b > a) return b;
//   return a;
// }

export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
// * should cover all execution paths!
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}

export function calculateAverage(numbers) {
  if (numbers.length === 0) return NaN;

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
