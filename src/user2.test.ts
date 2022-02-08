import * as _fn from "./user";

jest.mock("./user");
const createUser = _fn.createUser as jest.MockedFunction<typeof _fn.createUser>;
createUser.mockResolvedValue({
  name: "Jackson",
});

test('Create user with name "Jackson"', async () => {
  const user = await createUser("Jackson");
  expect(user.name).toBe("Jackson");
});
