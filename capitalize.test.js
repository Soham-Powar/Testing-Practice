import capitalize from "./capitalize.js";

it("first letter capital (1)", () => {
  expect(capitalize("kratos")).toBe("Kratos");
});

it("first letter capital (2)", () => {
  expect(capitalize("sumo")).toBe("Sumo");
});

it("first letter already capital", () => {
  expect(capitalize("Sumo")).toBe("Sumo");
});

it("empty string", () => {
  expect(capitalize("")).toBe("");
});

it("string length is 1", () => {
  expect(capitalize("a")).toBe("A");
});

it("all caps", () => {
  expect(capitalize("AAS")).toBe("Aas");
});
