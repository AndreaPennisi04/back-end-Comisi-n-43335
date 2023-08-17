const { calculo } = require("./maths.js");

describe("calculo matematico", () => {
  it("si no es un numero no se puede hacer un calculo matematico");
  console.log = jest.fn();

  const isMath = calculo("4*4");

  expect(isMath).toHaveLenght(number);
});
