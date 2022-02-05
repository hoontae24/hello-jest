it("tests 0 + 1 = 1", () => {
  expect(0 + 1).toBe(1);
});

it("tests 0 + 2 = 2", () => {
  expect(0 + 2).toBe(2);
});

it.only("tests 0 + 3 = 3", () => {
  expect(0 + 3).toBe(3);
});

it.skip("tests 0 + 4 = 4", () => {
  expect(0 + 4).toBe(4);
});

it.only.each([
  [0, 1, 1],
  [0, 2, 2],
  [0, 3, 3],
  [0, 4, 4],
])("tests %i + %i = %i", (a, b, expected) => {
  expect(a + b).toBe(expected);
});
