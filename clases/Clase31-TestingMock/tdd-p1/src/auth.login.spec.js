const { login } = require("./auth.login");

describe("Login function", () => {
  it("No se proporcion el usuario entonces deberia retornar No se ha proporcionado un usuario", () => {
    // pre setup
    console.log = jest.fn();

    // nucleo de la prueba
    const isAuth = login("", "123");

    // condiciones q deben cumplir
    expect(isAuth).toBe(null); // esto quiere decir que si no le mando uno de los parametros tiene que ser igaul a vacio
    expect(isAuth).toBeFalsy(); // falsy toma todos los valores: undefine, null, false
    expect(console.log).toHaveBeenCalledWith("No se ha proporcionado un usuario"); // esto es para que me devuelva el mensaje ptoporcionado
  });

  it("should log an error message if no password is provided", () => {
    console.log = jest.fn();

    const isAuth = login("coderUser", "");

    expect(isAuth).toBe(undefined); // aca lo que lee es que capture null y undefine
    expect(isAuth).toBeFalsy(); //Falsy captura 6 tipos de errores:  false, 0, '', null, undefined y NaN
    expect(console.log).toHaveBeenCalledWith("No se ha proporcionado un usuario");
  });

  //Test to: Incorrect user
  it("should log an error message if the user is incorrect", () => {
    console.log = jest.fn();

    const result = login("wrongUser", "123");

    expect(console.log).toHaveBeenCalledWith("Credenciales incorrectas");
    expect(result).toBe(false);
  });

  //Test to: Incorrect password
  it("should log an error message if the password is incorrect", () => {
    console.log = jest.fn();

    const result = login("coderHouse", "wrongPassword");

    expect(console.log).toHaveBeenCalledWith("Contraseña incorrecta");
    expect(result).toBe(false);
  });

  it("should log a success message if the user and password match", () => {
    console.log = jest.fn();

    const result = login("coderHouse", "123");

    expect(console.log).toHaveBeenCalledWith("logueado");
    expect(result).toBe(true);
  });
});

/*NOTA: si quiero ejecutar solo una prueba, a la prueba se le coloca un ONLY. EJ: 
it("should log an error message if the password is incorrect", () => {
    console.log = jest.fn();

    const result = login("coderHouse", "wrongPassword");

    expect(console.log).toHaveBeenCalledWith("Contraseña incorrecta");
    expect(result).toBe(false);
  });
  lo que va hacer es solo ejecutar ese caso y el resto se van a marcar como skipped*/
