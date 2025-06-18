import capitalize from "./capitalize.js";

it("first letter capital", () => {
  expect(capitalize("kratos")).toBe("Kratos");
});

it("first letter capital", () => {
  expect(capitalize("sumo")).toBe("Sumo");
});
