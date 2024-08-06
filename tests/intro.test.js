import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

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
