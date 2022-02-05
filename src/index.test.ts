test("null is null", () => {
  expect(null).toBeNull();
});

test("null is not undefined", () => {
  expect(null).not.toBeUndefined();
});

test("null is defined", () => {
  expect(null).toBeDefined();
});

test("undefined is undefined", () => {
  expect(undefined).toBeUndefined();
});

test("undefined is not null", () => {
  expect(undefined).not.toBeNull();
});

test("Mike is in user list", () => {
  const user = "mike";
  const list = ["mike", "john", "jane"];
  expect(list).toContain(user);
});

test("Mike is not in user list", () => {
  const user = "mike";
  const list = ["tom", "john", "jane"];
  expect(list).not.toContain(user);
});

test("The function throws some error", () => {
  const throwError = () => {
    throw new Error("");
  };
  expect(() => throwError()).toThrow();
});

test('The function throws a error named "E1"', () => {
  const throwError = () => {
    throw new Error("E1");
  };
  expect(() => throwError()).toThrow("E1");
  expect(() => throwError()).not.toThrow("E2");
});
