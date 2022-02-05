import {
  getNameUsingCallback,
  getNameUsingCallbackOnError,
  makeUser,
} from "./user";

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

test("Get user's name using callback", (done) => {
  const user = makeUser("John", 30);
  getNameUsingCallback(user, (name) => {
    expect(name).toBe("John");
    done();
  });
});

test("Get user's name using callback on error", (done) => {
  const user = makeUser("John", 30);
  getNameUsingCallbackOnError(user, (error, name) => {
    expect(() => {
      throw error;
    }).toThrow("Error");
    expect(name).toBeUndefined();
    done();
  });
});
