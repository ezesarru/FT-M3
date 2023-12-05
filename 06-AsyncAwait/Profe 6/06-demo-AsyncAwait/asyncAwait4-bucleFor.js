const personajes = ["Rick", "Morty", "Summer", "Beth"];

async function charactersAwait() {
	console.log("Listado de personajes:");
	for (let i = 0; i < personajes.length; i++) {
		const character = await new Promise((resolve) =>
			setTimeout(() =>
				resolve(personajes[i]), Math.random() * 1000)
		);
		console.log(character);
	}
}
  
charactersAwait();