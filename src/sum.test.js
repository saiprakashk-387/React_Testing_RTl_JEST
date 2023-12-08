import { sum, add } from "./Sum";

test("adds 2 + 2 to equal 4", () => {
  expect(add(1, 3)).toBe(4);
});
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
describe("add function", () => {
  // 3. A unit test
  it("should return 2", () => {
    // 4. An assertion
    expect(sum(1, 1)).not.toBe(1);
    // expect(sum(1, 1)).toBe(2);
  });
});

test(" Numbers two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
test('but there is a "@gmail.com" in Christoph@gmail.com', () => {
  expect("Christoph@gmail.com").toMatch(/@gmail.com/);
});
