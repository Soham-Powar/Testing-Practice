import calculator from "./calculator";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(7, 4)).toBe(3);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calculator.divide(4, 0)).toThrow("Cannot divide by zero.");
  });

  test("throws error for non-numeric inputs (add)", () => {
    expect(() => calculator.add("a", 2)).toThrow("Inputs must be numbers.");
  });

  test("throws error for non-numeric inputs (subtract)", () => {
    expect(() => calculator.subtract(2, null)).toThrow(
      "Inputs must be numbers."
    );
  });

  test("throws error for non-numeric inputs (multiply)", () => {
    expect(() => calculator.multiply(undefined, 2)).toThrow(
      "Inputs must be numbers."
    );
  });

  test("throws error for non-numeric inputs (divide)", () => {
    expect(() => calculator.divide({}, [])).toThrow("Inputs must be numbers.");
  });
});
