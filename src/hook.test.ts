beforeAll(() => console.log("beforeAll outer"));
afterAll(() => console.log("afterAll outer"));
beforeEach(() => console.log("beforeEach outer"));
afterEach(() => console.log("afterEach outer"));

it("tests outer", () => {
  console.log("tests outer");
  expect(0 + 1).toBe(1);
});

describe("section", () => {
  beforeAll(() => console.log("beforeAll inner"));
  afterAll(() => console.log("afterAll inner"));
  beforeEach(() => console.log("beforeEach inner"));
  afterEach(() => console.log("afterEach inner"));

  it("tests inner 1", () => {
    expect(0 + 1).toBe(1);
    console.log("tests inner 1");
  });

  it("tests inner 2", () => {
    expect(0 + 2).toBe(2);
    console.log("tests inner 2");
  });
});
