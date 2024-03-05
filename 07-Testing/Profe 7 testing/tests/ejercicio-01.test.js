const { suma, mult, user, promise, promiseThrow } = require("../ejercicio-01");

beforeAll(() => {
  console.log("Se imprime previo a correr los tests...");
})

xdescribe("Suma debe retornar la suma de dos números", () => {
  it("Debe retornar 5 cuando se le pasa 2 y 3", () => {
    expect(suma(2, 3)).toBe(5);
  });
  it("Debe retornar 6 cuando se le pasa 2 y 4", () => {
    expect(suma(2, 4)).toBe(6);
  });
});

describe("Mult retornar el producto de dos números", () => {
  xit("Debe retornar 6 cuando se le pasa 2 y 3", () => {
    expect(mult(2, 3)).toBe(6);
  });
  it("Debe retornar 8 cuando se le pasa 2 y 4", () => {
    expect(mult(2, 4)).toBe(8);
  });
});

describe("User devuelve objeto con nombre y apellido", () => {
  it("Debe retornar objeto con los valores enviados", () => {
    expect(user("Rick", "Sanchez")).toEqual({ nombre: "Rick", apellido: "Sanchez" });
  });
  it("Debe retornar objeto con los valores enviados", () => {
    expect(user("Morty", "Smith")).toMatchObject({ nombre: "Morty", apellido: "Smith" });
  });
  it("Debe retornar objeto con propiedades nombre y apellido", () => {
    expect(Object.keys(user("Summer", "Smith"))).toEqual(["nombre","apellido"]);
    //* Object.values({ nombre:"Summer", apellido:"Smith"}) => ["Summer", "Smith"]
  });
  it("Debe retornar objeto con los valores enviados", () => {
    expect(Object.values(user("Summer", "Smith"))).toEqual(["Summer","Smith"]);
    //* Object.values({ nombre:"Summer", apellido:"Smith"}) => ["Summer", "Smith"]
  });
});

describe.only("Testeando código asíncrono", () => {
  it("La promesa resuelve a Resuelta", () => {
    promise().then(data => expect(data).toBe("Resuelta"));
  });
  it("La promesa resuelve a Resuelta", async () => {
    const data = await promise();
    expect(data).toBe("Resuelta")
  });
  it("La promesa rechaza a Rechazada", () => {
    promise().catch(error => expect(error).toBe("Rechazada"));
  });
  it("La promesa lanza el error: Mensaje de error", async () => {
    try {
      const value = await promiseThrow();
      expect(value).toBe();
    } catch (error) {
      expect(error).toEqual(Error("Mensaje de error"))
    }
  });
  
});







