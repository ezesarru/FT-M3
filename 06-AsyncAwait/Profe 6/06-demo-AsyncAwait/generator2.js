function* generatorFunction() {
  console.log("Inicio");
  console.log("Segundo paso:", yield);
  console.log("Tercer paso:", yield);
  console.log("Final!");  
  return "Valor retornado";
}

//* PLAY
const generator =generatorFunction();
generator.next();
generator.next("Rick");
console.log(generator.next("Morty"));

