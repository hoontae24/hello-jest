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
