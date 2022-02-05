export interface User {
  name: string;
  age: number;
  gender: string | undefined;
}

export const makeUser = (name: string, age: number): User => {
  return { name, age, gender: undefined };
};

export const getNameUsingCallback = (
  user: User,
  callback: (name: string) => void
) => {
  setTimeout(() => {
    callback(user.name);
  }, 1000);
};

export const getNameUsingCallbackOnError = (
  user: User,
  callback: (error: Error, name?: string) => void
) => {
  setTimeout(() => {
    callback(new Error("Error"));
  }, 1000);
};

export const getAgeUsingPromise = async (user: User): Promise<number> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user.age);
    }, 1000);
  });
};

export const getAgeUsingPromiseOnError = async (
  user: User
): Promise<number> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error("Error"));
    }, 1000);
  });
};
