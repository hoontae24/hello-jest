import {
  createUser,
  getAgeUsingPromise,
  getAgeUsingPromiseOnError,
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

test("Get user's age using promise", () => {
  const user = makeUser("John", 30);
  return getAgeUsingPromise(user).then((age) => expect(age).toBe(30));
});

test("Get user's age using promise matchers", () => {
  const user = makeUser("John", 30);
  expect(getAgeUsingPromise(user)).resolves.toBe(30);
});

test("Get user's age using promise matchers on error", () => {
  const user = makeUser("John", 30);
  expect(getAgeUsingPromiseOnError(user)).rejects.toThrow();
  expect(getAgeUsingPromiseOnError(user)).rejects.toThrow("Error");
});

test("Get user's age using await", async () => {
  const user = makeUser("John", 30);
  const age = await getAgeUsingPromise(user);
  expect(age).toBe(30);
});
