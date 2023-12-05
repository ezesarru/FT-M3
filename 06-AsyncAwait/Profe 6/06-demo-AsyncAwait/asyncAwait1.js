function wait2Seconds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Resuelta luego de 2 segundos!!!");
		}, 2000);
	});
}

function promiseCall() {
  console.log("Iniciando...");
  wait2Seconds()
    .then(data => console.log(data))
}

async function asyncCall() {
  console.log("Iniciando...");
  const result = await wait2Seconds();
  console.log(result);
}

asyncCall();