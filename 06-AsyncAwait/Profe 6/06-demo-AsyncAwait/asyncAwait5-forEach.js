const personajes = ["Rick", "Morty", "Summer", "Beth"];

function charactersAwait() {
	console.log("Listado de personajes:");
	personajes.forEach(async (char) => {
		const character = await new Promise((resolve) =>
			setTimeout(() => resolve(char), Math.random() * 1000)
		);
		console.log(character);
	});
}
  
charactersAwait();