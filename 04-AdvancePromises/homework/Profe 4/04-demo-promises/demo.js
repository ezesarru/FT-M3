//* CREAMOS PROMESAS
const fulfilled_1 = new Promise((resolve, reject) => {
  resolve("Value desde fulfilled_1");
});
const fulfilled_2 = new Promise((resolve, reject) => {
  resolve("Value desde fulfilled_2");
});
const rejected = new Promise((resolve, reject) => {
  reject("Error desde rejected");
});


//* Es resuelta y NO tiene "succesHandler"
//* F U L F I L L M E N T B U B B L E D
fulfilled_1
  .then(     )
  .then(value => console.log(value))
// Value desde fulfilled_1
// Porque NO EXISTE succesHandler en el primer .then( )


//* Es resuelta y tiene "succesHandler"
fulfilled_1
  .then(value => console.log(value))
// Value desde fulfilled_1
// Ejecuta el succesHandler


//! Es rechazada y tiene "errorHandler"
rejected
  .then(
    value => console.log(value),
    error => console.log(error)  
  )
// Error desde rejected
// Ejecuta el errorHandler


//! Es rechazada y NO tiene "errorHandler"
rejected
  .then(
    value => console.log(value)
  )
  .then(
    value => console.log(value)
  )
  .catch(
    error => console.log(error)
  )
// Error desde rejected
// Busca el errorHandler más cercano


//* Es resuelta y devuelve "un resultado"
//* P R O M I S E F O R R E S U L T
fulfilled_1
  .then(
    value => {
      return value;
    }
  )
  .then(
    value => {
      console.log("then-2:", value)
      return "Nueva info desde then-2"
    }
  )
  .then(
    value => console.log("then-3:", value)
  )
// then-2: Value desde fulfilled_1
// then-3: Nueva info desde then-2
// Un then recibe en "value" lo que retorna el then previo


//! Es rechazada y devuelve "un error"
//! E R R O R C A U G H T
rejected
  .then(
    value => value,
    error => {
      throw error
      // throw new Error(error)
    }
  )
  .then(
    value => console.log(value)
  )
  .catch(
    error => console.log("catch:", error)
  )
// catch: Error desde rejected
// Un then recibe en "value" lo que retorna el then previo
//   NO importando si proviene de "succesHandler" o del "errorHandler"
// => 1- Utilizamos un solo "errorHandler" en el "catch"
// => 2- Ó "lanzamos un error"


//* Es resuelta y devuelve "otra Promesa"
//* A S S I M I L A T I O N
fulfilled_1
  .then(
    value => {
      console.log("then-1:", value);
      return fulfilled_2;
    }
  )
  .then(
    value => console.log("then-2:", value)
  )
  .catch(
    error => console.log("catch:", error)
  )
// then-1: Value desde fulfilled_1
// then-2: Value desde fulfilled_2
// Al retornar una promesa, el siguiente then tomará el valor al que resolvió esa promesa


//* Es resuelta y devuelve "otra Promesa"
//* A S S I M I L A T I O N
fulfilled_1
  .then(
    value => {
      console.log("then-1:", value);
      return rejected;
    }
  )
  .then(
    value => console.log("then-2:", value)
  )
  .catch(
    error => console.log("catch:", error)
  )
// then-1: Value desde fulfilled_1
// then-2: Value desde fulfilled_2
// Al retornar una promesa, el siguiente then tomará el valor al que resolvió esa promesa, incluso si se trata de un promesa rechazada
