// const moment = require("moment");

// const fechaActual = Date.now();
// console.log(fechaActual);
// console.log(moment().format("dddd"));
// console.log("Hola de nuevo...");

//* Versiones
//* 1.0.0
// function suma(a, b) {
//   const sum = a + b;
//   return sum
// }

//* 1.0.1
// function suma(a, b) {
//   return a + b;
// }

//* 1.1.0
// function suma(...args) {
//   console.log(args);
//   return args.reduce((acc, num) => acc + num, 0);
// }

//* 2.0.0
// function suma(type, ...args) {
//   if(type === "sum") {
//     return args.reduce((acc, num) => acc + num, 0);
//   }
//   if(type === "mult") {
//     return args.reduce((acc, num) => acc * num, 1);
//   }
// }
// console.log(suma(2, 3));
// console.log(suma(2, 3, 4, 5, 6));
// console.log(suma("sum", 2, 3, 4, 5, 6));
// console.log(suma("mult", 2, 3, 4, 5, 6));

//* fs => FileSystem => readFile
const fs = require("fs");

fs.readFile('./data.txt', 'utf8', function(esteEsElError, siHayInfo) {
  console.log("data:", siHayInfo);
  console.log("error", esteEsElError);
}); 