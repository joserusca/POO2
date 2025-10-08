const fibo = require("./fibo");

describe("Fibonacci", () => {
  test("Recibe cero y devuelve cero", () => {
    expect(fibo(0)).toBe(0);
  });
  test("Recibe uno y devuelve uno", () => {
    expect(fibo(1)).toBe(1);
  });
  test("Recibe 2 y devuelve uno", () => {
    expect(fibo(2)).toBe(1);
  });
  test("Recibe 3 y devuelve 2", () => {
    expect(fibo(3)).toBe(2);
  });
  //   test("Recibe 4 y devuelve 3", () => {
  //     expect(fibo(4)).toBe(3);
  //   });
  //   test("Recibe 5 y devuelve 5", () => {
  //     expect(fibo(5)).toBe(5);
  //   });
  //   test("Recibe 6 y devuelve 8", () => {
  //     expect(fibo(6)).toBe(8);
  //   });
});
