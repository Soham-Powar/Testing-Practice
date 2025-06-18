import reverseString from "./reverseString.js";

describe("reverseString", () => {
  it("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  it("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  it("reverses a string with punctuation", () => {
    expect(reverseString("!abc?")).toBe("?cba!");
  });

  it("returns an empty string when given an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  it("throws a TypeError when input is a number", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
  });

  it("throws a TypeError when input is null", () => {
    expect(() => reverseString(null)).toThrow(TypeError);
  });

  it("throws a TypeError when input is an array", () => {
    expect(() => reverseString(["hello"])).toThrow(TypeError);
  });

  it("throws a TypeError when input is an object", () => {
    expect(() => reverseString({ text: "hello" })).toThrow(TypeError);
  });
});
