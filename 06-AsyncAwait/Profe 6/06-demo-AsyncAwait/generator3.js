function* simpleGenerator3() {
	let i = 1
	while (true) {
		const increment = yield i
		if (increment !== undefined) {
			i += increment
		} else {
			i++
		}
	}
}

let objGenerator = simpleGenerator3()
console.log(objGenerator.next())
console.log(objGenerator.next())
console.log(objGenerator.next(4))
console.log(objGenerator.next(100))
console.log(objGenerator.next(4))
console.log(objGenerator.next())
