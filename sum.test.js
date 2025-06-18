import sum from "./sum.js";

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(0, 0)).toBe(0);
});

it("adds zeroes", () => {
  expect(sum(0, 0)).toBe(0);
});
