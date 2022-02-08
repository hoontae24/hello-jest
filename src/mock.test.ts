const mockFn = jest.fn();

describe("mock function", () => {
  mockFn();
  mockFn(1);

  test("The mock function is called twice", () => {
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("The mock function is called with the arguments [1]", () => {
    expect(mockFn.mock.calls[1]).toEqual([1]);
  });
});
