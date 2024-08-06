import { describe, test, it, expect } from "vitest";
import { calculateAverage, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return first argument if greater", () => {
    // AAA
    // Arrange: set up test environment  ==> turn on tv
    // const a = 2;
    // const b = 1;

    // Act: perform action ==> press power button
    // const result = max(a, b);

    // Assert: check outcome to see if matches expectations ==> check if tv has turned off
    // expect(result).toBe(2);

    expect(max(2, 1)).toBe(2);
  });

  it("should return second argument if greater", () => {
    expect(max(1, 2)).toBe(2);
  });
  it("should return first argument if they are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if argument is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if argument is divisible by only 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  it("should return Buzz if argument is divisible by only 5", () => {
    expect(fizzBuzz(20)).toBe("Buzz");
  });
  it("should return argument as string if number is not divisible by 3 or 5", () => {
    expect(fizzBuzz(2)).toBe("2");
  });
});

//Test driven development: produces code that is fully covered by tests, prevents from overengineering
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate average of an array with single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });
  it("should calculate average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});
