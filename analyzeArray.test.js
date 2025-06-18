import analyzeArray from "./analyzeArray";

describe("analyzeArray", () => {
  it("analyzes simple array", () => {
    expect(analyzeArray([1, 8, 4, 3, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("throws error for non-array input", () => {
    expect(() => analyzeArray("not an array")).toThrow(
      "Input must be a non-empty array."
    );
  });

  it("throws error for empty array", () => {
    expect(() => analyzeArray([])).toThrow("Input must be a non-empty array.");
  });

  it("throws error for array with non-number elements", () => {
    expect(() => analyzeArray([1, "two", 3])).toThrow(
      "All elements must be numbers."
    );
  });

  it("handles negative numbers correctly", () => {
    const input = [-10, 0, 10];
    const result = analyzeArray(input);
    expect(result).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 3,
    });
  });
});
