export interface User {
  name: string;
  age: number;
  gender: string | undefined;
}

export const makeUser = (name: string, age: number): User => {
  return { name, age, gender: undefined };
};
