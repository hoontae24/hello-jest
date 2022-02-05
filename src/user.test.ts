import { makeUser } from "./user";

test("Make a user object from name and age.(toEqual)", () => {
  expect(makeUser("John", 30)).toEqual({ name: "John", age: 30 });
});

test("Make a user object from name and age.(toStrictEqual)", () => {
  expect(makeUser("John", 30)).toStrictEqual({
    name: "John",
    age: 30,
    gender: undefined,
  });
});
