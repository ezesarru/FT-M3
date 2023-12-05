function* generatorFunction() {
  console.log("Inicio");
  yield "Segundo paso...";
  // return "Quiero retornar un valor";
  yield "Tercer paso...";
  console.log("Final!");
  return "Valor retornado";
}

//* PLAY
const generator =generatorFunction();
console.log(generator);
console.log(generator.next());
console.log("done:", generator.next().done);
console.log("value:", generator.next().value);


//? PAUSE / CONTINUE
//* yield

//! STOP
//*   break => Bucles
//*   return
//*   throw new Error();