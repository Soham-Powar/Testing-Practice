import capitalize from "./capitalize.js";

it("first letter capital (1)", () => {
  expect(capitalize("kratos")).toBe("Kratos");
});

it("first letter capital (2)", () => {
  expect(capitalize("sumo")).toBe("Sumo");
});

it("empty string", () => {
  expect(capitalize("")).toBe("");
});
