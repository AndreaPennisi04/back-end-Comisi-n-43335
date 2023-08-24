import { calculadora } from "./Calculadora.js";

test("suma", () => {
  expect(calculadora.suma(2, 3)).toBe(5);
});

test("resta", () => {
  expect(calculadora.suma(5, 3)).toBe(2);
});

test("multiplicacion", () => {
  expect(calculadora.suma(2, 3)).toBe(6);
});

test("division", () => {
  expect(calculadora.suma(6, 2)).toBe(3);
});
