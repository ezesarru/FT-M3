async function printCharacters() {
	const character1 = await new Promise((resolve, reject) =>
		setTimeout(() => resolve("Rick"), 2000));
	console.log(character1);

	const character2 = await new Promise((resolve, reject) =>
		 setTimeout(() => resolve('Morty'), 0));
	console.log(character2);
	console.log("Fin del listado!");
}

printCharacters();
console.log("Finalizado!");