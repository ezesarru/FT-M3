//! demo-01.js

//* let module.exports = {}
// module.exports.siete = 7;
// module.exports.siete = 7;
//* let exports = module.exports;
// exports.nueve = 9;
// exports.ocho = 8;
// module.exports = "Hola";

//* EXPORTO => module.exports
// console.log(module.exports);
// console.log(exports);

const saludo = "Hola Mundo desde demo-01.js";
const saludar = (menlaje) => console.log(menlaje);

// exports.saludo = saludo;
// exports.saludar = saludar;
module.exports = { saludo, saludar };