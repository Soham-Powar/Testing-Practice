const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(0, 0)).toBe(0);
});

test("zero addition", () => {
  expect(sum(0, 0)).toBe(0);
});
