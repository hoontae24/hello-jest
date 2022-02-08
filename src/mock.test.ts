describe("mock function", () => {
  const mockFn = jest.fn();

  mockFn();
  mockFn(1);

  test("The mock function is called twice", () => {
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("The mock function is called with the arguments [1]", () => {
    expect(mockFn.mock.calls[1]).toEqual([1]);
  });
});

describe("mock function result", () => {
  const mockFn = jest.fn((n) => n * 2);

  mockFn(10);
  mockFn(100);

  test("The mock function is called twice", () => {
    expect(mockFn.mock.calls.length).toBe(2);
  });

  test("The mock function multiply 2 by 10", () => {
    expect(mockFn.mock.results[0].value).toBe(20);
  });

  test("The mock function multiply 2 by 100", () => {
    expect(mockFn.mock.results[1].value).toBe(200);
  });
});

describe("mock function result", () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValueOnce(20).mockReturnValue(200);

  mockFn();
  mockFn();
  mockFn();

  test("The mock function is called twice", () => {
    expect(mockFn.mock.calls.length).toBe(3);
  });

  test("The mock function multiply 2 by 10", () => {
    expect(mockFn.mock.results[0].value).toBe(20);
  });

  test("The mock function multiply 2 by 100", () => {
    expect(mockFn.mock.results[1].value).toBe(200);
  });

  test("The mock function multiply 2 by 100", () => {
    expect(mockFn.mock.results[2].value).toBe(200);
  });
});

describe("mock function resolved value", () => {
  const mockFn = jest.fn();

  mockFn.mockResolvedValueOnce({ name: "Jackson" });

  test('mock funtion returned a promise of { name: "Jackson"', async () => {
    const data = await mockFn();
    expect(data.name).toBe("Jackson");
  });
});
