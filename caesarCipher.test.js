import caesarCipher from "./caesarCipher";

test("shifts lowercase letters correctly", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps lowercase letters from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifts uppercase letters correctly", () => {
  expect(caesarCipher("ABC", 1)).toBe("BCD");
});

test("wraps uppercase letters from Z to A", () => {
  expect(caesarCipher("XYZ", 2)).toBe("ZAB");
});

test("preserves case of letters", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("leaves punctuation and spaces unchanged", () => {
  expect(caesarCipher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});

test("works with negative shifts", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("wraps correctly with negative shift from a to z", () => {
  expect(caesarCipher("abc", -3)).toBe("xyz");
});
