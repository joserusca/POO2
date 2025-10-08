const suma = require("./sum");

describe("Preubas", () => {
  test("Debe sumar 1 + 2 y devolver 3", () => {
    expect(suma(1, 2)).toBe(3);
  });
  test("Debe sumar 2 + 2 y devolver 4", () => {
    expect(suma(2, 2)).toBe(4);
  });
});
