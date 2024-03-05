const suma = function(a, b) {
  // Aquí tu código
  return a + b;
}

const mult = function(a, b) {
  // Aquí tu código
  return a * b;
}

const user = function(nombre, apellido) {
  // Aquí tu código
  return {
    nombre,
    apellido
  }
}

const promise = () => {
  const newPromise = new Promise((resolve, reject) => {
    resolve("Resuelta")
  })
  return newPromise;
}

const promiseRejected = () => {
  const newPromise = new Promise((resolve, reject) => {
    reject("Rechazada")
  })
  return newPromise;
}

const promiseThrow = () => {
  const newPromise = new Promise((resolve, reject) => {
    throw new Error("Mensaje de error")
  })
  return newPromise;
}

module.exports = { suma, mult, user, promise, promiseRejected, promiseThrow }