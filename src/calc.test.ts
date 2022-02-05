import { sum } from "./calc";

test("adds 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 3 + 3 not equals 5", () => {
  expect(sum(3, 3)).not.toBe(5);
});
